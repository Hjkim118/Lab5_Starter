// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from "../code-to-unit-test/unit-test-me";

// TODO - Part 2
// Phone Number Tests
test("valid phone number 1", () => {
  expect(isPhoneNumber("123-456-7890")).toBe(true);
});
test("valid phone number 2", () => {
  expect(isPhoneNumber("(123) 456-7890")).toBe(true);
});
test("invalid phone number 1", () => {
  expect(isPhoneNumber("123-456")).toBe(false);
});
test("invalid phone number 2", () => {
  expect(isPhoneNumber("abc-def-ghij")).toBe(false);
});

// Email Tests
test("valid email 1", () => {
  expect(isEmail("test@ucsd.edu")).toBe(true);
});
test("valid email 2", () => {
  expect(isEmail("hello@gmail.com")).toBe(true);
});
test("invalid email 1", () => {
  expect(isEmail("test@example")).toBe(false);
});
test("invalid email 2", () => {
  expect(isEmail("test.com")).toBe(false);
});

// Strong Password Tests
test("valid password 1", () => {
  expect(isStrongPassword("a123")).toBe(true);
});
test("valid password 2", () => {
  expect(isStrongPassword("Abc_12345678")).toBe(true);
});
test("invalid password 1", () => {
  expect(isStrongPassword("1abc")).toBe(false);
});
test("invalid password 2", () => {
  expect(isStrongPassword("a")).toBe(false);
});

// Date Tests
test("valid date 1", () => {
  expect(isDate("05/05/2026")).toBe(true);
});
test("valid date 2", () => {
  expect(isDate("5/5/2026")).toBe(true);
});
test("invalid date 1", () => {
  expect(isDate("2026/05/05")).toBe(false);
});
test("invalid date 2", () => {
  expect(isDate("05-05-26")).toBe(false);
});

// Hex Color Tests
test("valid hex 1", () => {
  expect(isHexColor("#ABC")).toBe(true);
});
test("valid hex 2", () => {
  expect(isHexColor("#123456")).toBe(true);
});
test("invalid hex 1", () => {
  expect(isHexColor("#GGGGGG")).toBe(false);
});
test("invalid hex 2", () => {
  expect(isHexColor("!@#$%^")).toBe(false);
});
