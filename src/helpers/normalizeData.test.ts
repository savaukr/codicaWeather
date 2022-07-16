import { normalizeData } from "./normalizeData";
import { cities } from "../data/cities_data";

test("Validate normilize value", () => {
  expect(Array.isArray(normalizeData(cities))).toBe(true);
});

test("Validate normilize second of value ", () => {
  expect(Array.isArray(normalizeData(cities)[1])).toBe(true);
});
test("Validate normilize if not value ", () => {
  expect(Array.isArray(normalizeData([])[1])).toBe(true);
});

test("Validate normilize", () => {
  expect(normalizeData(cities)[1].length === cities.length).toBe(true);
});

test("Validate normilize first element", () => {
  expect(normalizeData(cities)[1][0] === cities[0].id).toBe(true);
});
