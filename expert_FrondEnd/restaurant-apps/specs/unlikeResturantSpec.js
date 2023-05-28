import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteData from '../src/scripts/data/favoriteData';

describe('unlike A Restaurant', () => {
    beforeEach(async () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
        await FavoriteData.putRestaurant({ id: 1 });
        await likeButtonInitiator.init({
            likeButtonContainer: document.querySelector('#likeButtonContainer'),
            favoriteResto: {
                id: 1,
            },
        });
    });

    afterEach(async () => {
        await FavoriteData.deleteRestaurant(1);
    });

    it('should display unlike widget when the Restaurant has been liked', async () => {
        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should not display like widget when the Restaurant has been liked', async () => {
        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('should be able to remove liked Restaurant from the list', async () => {
        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteData.getAllRestaurant()).toEqual([]);
    })

    it('should not throw error if the unliked Restaurant is not in the list', async () => {
        await FavoriteData.deleteRestaurant(1);

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await FavoriteData.getAllRestaurant()).toEqual([]);
    });
});