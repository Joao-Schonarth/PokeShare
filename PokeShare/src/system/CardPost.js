
var card = {
    id: 1,
    pokemon: {
      id: 4,
      name: "Charmander"
    }
  }


class CardPost(){
  constructor(user, card, postInfo){
    this.user = {
      userid: user.userid,
      username: user.username,
      usertag: user.usertag //level, image, verified
    };
    this.datetime = postInfo.dateTime;
    this.likes = postInfo.likes;
    this.card = {
      pokemonId: card.pokemonid,
      isHolo: card.isHolo
    };
  }

  getAsObj(){
    return {
      user: this.user,
      datetime: this.datetime,
      likes: this.likes,
      card: this.card
    }
  }
}


module.exports = CardPost;

/*





Card:
- pokemon id (used to access PokeAPI)
- isHolo

CardPost:
- user
- datetime
- card
- image array
- description
- comments {user, message, datetime}
- verification (null, pending, approved)
- privacy (private, friends, friends o' friends, public)
- Flags (class{counters for each reasoning})
- Likes
- Retweets
- hasRating?





Profile










*/
