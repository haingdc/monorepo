/* eslint-disable no-empty */
export function doWorks() {
  b();
}
function b() {
  c();
  h();
}

function c() {
  d();
  f();
}

function d() {
  e();
}

function e() {
  for(let i = 0; i < 1e7; i += Math.random()) { }
}
function f() {
  for(let i = 0; i < 1e7; i += Math.random()) { }
  g();
}
function g() {
  for(let i = 0; i < 1e7; i += Math.random()) { }
}
function h() {
  f();
}