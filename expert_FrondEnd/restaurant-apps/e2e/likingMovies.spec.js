Feature("likingMovies");

Before(({ I }) => {
  I.amOnPage("/#/restaurant");
});

Scenario(
  "liking one restaurant and verifying is added to favorite",
  async ({ I }) => {
    await I.waitForElement(".detail", 5);
    await I.seeElement(".detail");

    const getRestaurantTitle = await I.grabTextFrom(".restoName");

    I.click(locate(".detail").first());

    I.seeElement(".like-white");
    I.click(".like-white");

    I.waitForElement(".like-blue", 3);
    I.seeElement(".like-blue");

    I.amOnPage("/#/favorite");

    I.see(getRestaurantTitle, ".restoName");
  }
);

Scenario(
  "unliking one restaurant and verifying is removed from favorite",
  async ({ I }) => {

     await I.waitForElement(".detail", 5);
     await I.seeElement(".detail");

     const getRestaurantTitle = await I.grabTextFrom(".restoName");

     I.click(locate(".detail").first());

     I.seeElement(".like-white");
     I.click(".like-white");

     I.waitForElement(".like-blue", 3);
     I.seeElement(".like-blue");

     I.amOnPage("/#/favorite");

     I.see(getRestaurantTitle, ".restoName");

    I.amOnPage("/#/favorite");

    await I.waitForElement(".detail", 5);
    await I.seeElement(".detail");

    I.click(locate(".detail").first());

    I.seeElement(".like-blue");
    I.click(".like-blue");

    I.waitForElement(".like-white", 3);
    I.seeElement(".like-white");

    I.amOnPage("/#/favorite");

    I.dontSeeElement(".restoName");
  }
);
