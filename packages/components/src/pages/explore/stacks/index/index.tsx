import React, { useReducer, useState } from 'react'
import { View, StyleSheet, Image, ScrollView } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { Button, Button2 } from '../../../../components/button'
import { getRandomFloat } from '../../../../utils'
import { SearchResult } from '../../sub-components/searchResult'
import calendar from '../../../../../assets/calendar.png'
import drop from '../../../../../assets/drop.png'
import location from '../../../../../assets/place.png'
import group from '../../../../../assets/group.png'
import { InnerInput } from '../../../../components/input'
import cardPic1 from '../../../../../assets/card_s_taj-vista.png'
import cardPic2 from '../../../../../assets/card_s_sheraton.png'
import {
  ProductList,
  ProductListSkeleton,
} from '../../../../containers/product-list'
import { doWorks } from '../../../../utils/lotOfWorks'

export const list = [
  { title: 'Sheraton Grand', source: cardPic1, price: '5999' },
  { title: 'Taj Vista', source: cardPic2, price: '6999' },
  { title: 'Taj Vista', source: cardPic2, price: '6999' },
]

interface State {
  status: 'initial' | 'loading' | 'fetchingSuccess' | 'fetchingFail'
}

interface Action {
  type: string
}

export function Index(props: StackScreenProps<any>) {
  const { navigation } = props
  const [place, setPlace] = useState('Bangalore')
  const [goStart, setGoStart] = useState('27 May, 2020')
  const [goEnd, setGoEnd] = useState('30 May, 2020')
  const [members, setMembers] = useState('1 Adult')

  const initialState: State = {
    status: 'initial',
  }

  const [state, dispatch] = useReducer<
    (prevState: State, action: Action) => State
  >(function reducer(prevState, action) {
    switch (action.type) {
      case 'loading':
        return {
          ...prevState,
          status: 'loading',
        }
      case 'fetchingSuccess':
        return {
          ...prevState,
          status: 'fetchingSuccess',
        }
      default:
        return prevState
    }
  }, initialState)

  function pressSearch() {
    dispatch({ type: 'loading' })
    setTimeout(() => {
      dispatch({ type: 'fetchingSuccess' })
    }, getRandomFloat(1400, 2800))
    doWorks();
  }

  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          width: 375,
          paddingTop: 30,
          paddingBottom: 40,
        }}
      >
        <InnerInput
          type="location"
          avatar={location}
          style={styles.intput}
          value={place}
          onChangeText={setPlace}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <InnerInput
          type="location"
          avatar={calendar}
          style={styles.intput}
          value={goStart}
          onChangeText={setGoStart}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <InnerInput
          type="location"
          avatar={calendar}
          style={styles.intput}
          value={goEnd}
          onChangeText={setGoEnd}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <InnerInput
          type="location"
          avatar={group}
          style={styles.intput}
          value={members}
          onChangeText={setMembers}
          imageStyle={{ width: 13.43, height: 18.77 }}
        />
        <View style={{ flexDirection: 'row', marginBottom: 30 }}>
          <Button onPress={pressSearch}>Search</Button>
          <Button2 style={{ width: 45, height: 40, marginLeft: 10 }}>
            <Image source={drop} style={{ width: 15, height: 20 }} />
          </Button2>
        </View>

        {state.status == 'initial' ? (
          <>
            <ProductList
              data={list}
              onViewAll={() => {
                navigation.navigate('TopHotels')
              }}
            >
              Hotels
            </ProductList>
            <ProductList
              data={list}
              onViewAll={() => {
                navigation.navigate('Book Details')
              }}
              style={{ marginVertical: 20, marginHorizontal: 20 }}
            >
              Hotels
            </ProductList>
          </>
        ) : undefined}

        {state.status == 'loading' ? (
          <>
            <ProductListSkeleton data={list} onViewAll={() => {}}>
              Hotels
            </ProductListSkeleton>
            <ProductListSkeleton
              data={list}
              onViewAll={() => {}}
              style={{ marginVertical: 20, marginHorizontal: 20 }}
            >
              Hotels
            </ProductListSkeleton>
          </>
        ) : undefined}

        {state.status == 'fetchingSuccess' ? <SearchResult /> : undefined}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  intput: {
    marginHorizontal: 20,
    marginBottom: 20,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.5)',
    borderStyle: 'solid',
    shadowColor: 'rgba(56,56,56,0.75)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.14,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 4,
  },
})
