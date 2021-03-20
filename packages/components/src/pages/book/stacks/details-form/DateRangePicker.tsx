/* eslint-disable no-param-reassign */
import React, { Component } from 'react'
import {Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Calendar } from 'react-native-calendars'
import XDate from 'xdate';
import chevronLeft from '../../../../../assets/chevron-left-calendar.png';
import chevronRight from '../../../../../assets/chevron-right-calendar.png';

interface Props {
  initialRange: any[];
  // eslint-disable-next-line @typescript-eslint/ban-types
  onSuccess: Function;
  theme: {
    markColor: string;
    markTextColor: string;
    markColor2: string;
    markTextColor2: string;
  },
};

interface State {
  isFromDatePicked: boolean;
  isToDatePicked: boolean;
  markedDates: any;
  fromDate: string;
}
export default class DateRangePicker extends Component<Props, State> {
  // eslint-disable-next-line react/static-property-placement
  static defaultProps = {
    theme: { markColor: '#00adf5', markTextColor: '#ffffff' }
  };

  constructor(props) {
    super(props);
    this.state = {
      isFromDatePicked: false,
      isToDatePicked: false,
      markedDates: {},
      fromDate: '',
    };
  }


  componentDidMount() { this.setupInitialRange() }

  onDayPress = (day) => {
    if (!this.state.isFromDatePicked || (this.state.isFromDatePicked && this.state.isToDatePicked)) {
      this.setupStartMarker(day)
    } else if (!this.state.isToDatePicked) {
      const markedDates = {...this.state.markedDates}
      const [mMarkedDates, range] = this.setupMarkedDates(this.state.fromDate, day.dateString, markedDates)
      if (range >= 0) {
        this.setState({isFromDatePicked: true, isToDatePicked: true, markedDates: mMarkedDates})
        this.props.onSuccess(this.state.fromDate, day.dateString)
      } else {
        this.setupStartMarker(day)
      }
    }
  }

  setupStartMarker = (day) => {
    const markedDates = {
      [day.dateString]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor
      },
    };
    this.setState({
      isFromDatePicked: true,
      isToDatePicked: false,
      fromDate: day.dateString,
      markedDates,
    });
  }

  setupMarkedDates = (fromDate, toDate, markedDates) => {
    const mFromDate = new XDate(fromDate)
    const mToDate = new XDate(toDate)
    const range = mFromDate.diffDays(mToDate)
    if (range >= 0) {
      if (range == 0) {
        markedDates = {
          [toDate]: {
            color: this.props.theme.markColor,
            textColor: this.props.theme.markTextColor
        }};
      } else {
        for (let i = 1; i <= range; i += 1) {
          const tempDate = mFromDate.addDays(1).toString('yyyy-MM-dd')
          if (i < range) {
            markedDates[tempDate] = {color: this.props.theme.markColor2, textColor: this.props.theme.markTextColor2}
            // markedDates[tempDate] = {color: this.props.theme.markColor, textColor: this.props.theme.markTextColor}
          } else {
            markedDates[tempDate] = {endingDay: true, color: this.props.theme.markColor, textColor: this.props.theme.markTextColor}
          }
        }
      }
    }
    return [markedDates, range]
  }

  setupInitialRange = () => {
    if (!this.props.initialRange) {
      return;
    }
    const [fromDate, toDate] = this.props.initialRange
    const markedDates = {
      [fromDate]: {
        startingDay: true,
        color: this.props.theme.markColor,
        textColor: this.props.theme.markTextColor
      },
    };
    const [mMarkedDates, range] = this.setupMarkedDates(fromDate, toDate, markedDates);
    this.setState({
      markedDates: mMarkedDates,
      fromDate
    });
  }

  render() {
    return (
      <Calendar
        {...this.props}
        style={{ minHeight: 365 }}
        markingType="period"
        current={this.state.fromDate}
        markedDates={this.state.markedDates}
        onDayPress={(day) => {this.onDayPress(day)}}
        renderArrow={(direction) => {
          if (direction == "left")
            return <Image source={chevronLeft} style={{ width: 12, height: 20}} />;
          return <Image source={chevronRight} style={{ width: 12, height: 20}} />;
        }}

      />
    )
  }
}
