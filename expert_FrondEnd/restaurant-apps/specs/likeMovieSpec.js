import likeButtonInitiator from '../src/scripts/utils/like-button-initiator';

describe('Liking A Movie', () => {
  it('should show the like button when the movie has not been liked before', async () => {  
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';

    await likeButtonInitiator.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteResto: {
            id: 1,
        },
    });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
    });
});
