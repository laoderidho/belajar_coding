Feature("likingMovies");

Before(({ I }) => {
  I.amOnPage("/#/restaurant");
});

Scenario("Showing empty liked movies", async ({ I }) => {
     await I.waitForElement(".detail");

     I.seeElement(".detail");

     I.click(locate(".detail").first());
     await I.waitForElement(".detail_content");

     I.seeElement(".like-white");

     I.click(".like-white");

     I.seeElement(".like-red");

     I.amOnPage("/#/favorite");

     await I.waitForElement(".detail");

     I.seeElement(".detail");

     I.click(locate(".detail").first());
     await I.waitForElement(".detail_content");

     I.seeElement(".like-red");

    I.click(".like-red");

    I.seeElement(".like-white");

    I.amOnPage("/#/favorite");

    I.seeElement(".nullDataFavorite")
});
