select "addresses"."line1", "cities"."name", "addresses"."district",
  "countries"."name" from "addresses"
  join "cities" using ("cityId")
  join "countries" using ("countryId");
