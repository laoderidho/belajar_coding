import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteData from '../src/scripts/data/favoriteData';

describe('Like A Restaurant', () => {

    beforeEach(() => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    });

    it('should show the like button when the Restaurant has not been liked before', async () => {  
        await likeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('should not show the unlike button when the Restaurant has not been liked before', async () => {
        await likeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: {
                id: 1,
            },
        });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('should be able to like the Restaurant', async () => {
        await likeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: {
                id: 1,
            },
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteData.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        FavoriteData.deleteRestaurant(1);
    });


    it('should not add a Restaurant again when its already liked', async () => {
        await likeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: {
                id: 1,
            },
        });

        await FavoriteData.putRestaurant({ id: 1 });
        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteData.getAllRestaurant()).toEqual([{ id: 1 }]);

        FavoriteData.deleteRestaurant(1);
    })

    xit('should not add a Restaurant when it has no id', async () => {
        await likeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: {},
        });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await FavoriteData.getAllRestaurant()).toEqual([]);
    });
});

