select "countries"."name", count("cityId") from "cities"
  join "countries" using ("countryId")
  group by "countries"."name";
