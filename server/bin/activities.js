const mongoose    = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/backtoyou', {useMongoClient: true});

const Activity = require('../models/activities');

const activities = [
  {
    name: 'Biking',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/biking_zpsbflmtnmu.png'
  },
  {
    name: 'Cleaning',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/biking_zpsbflmtnmu.png'
  },
  {
    name: 'Cooking',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/cooking_zpsnzzoeekz.png'
  },
  {
    name: 'Creating/Thinking',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/creating_zpswbsuwg85.png'
  },
  {
    name: 'Dancing/Party',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/dancing_zpsvky8fqwb.png'
  },
  {
    name: 'Dating',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/dancing_zpsvky8fqwb.png'
  },
  {
    name: 'Drinking',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/drinking_zpsu7vwvzch.png'
  },
  {
    name: 'Eating',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/eating_zpsybc2p1af.png'
  },
  {
    name: 'Fishing',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/fishing_zpsgjfvhi6v.png'
  },
  {
    name: 'Gaming',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/gaming_zpsuczcttlp.png'
  },
  {
   name: 'Homework/Studying',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/homework_zpszvttb5u8.png'
  },
  {
    name: 'Movies',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/Movies_zpsmrs9pktf.png'
  },
  {
    name: 'Outdoors',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/outdoors_zpsn7nmpzef.png'
  },
  {
    name: 'Pet Time',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/pet%20time_zpsf4ecjuz3.png'
  },
  {
    name: 'Reading',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/reading_zpsdum9pydp.png'
  },
  {
    name: 'Roller-Blading',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/roller-skating_zpszpaxcypy.png'
  },
  {
    name: 'Shopping',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/shopping_zpsivrix5zs.png'
  },
  {
    name: 'Singing',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/singing_zpsglem5a7x.png'
  },
  {
    name: 'Social Media',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/social%20media_zpsalengiu5.png'
  },
  {
    name: 'Swimming',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/swimming_zpsfb4tz4mr.png'
  },
  {
    name: 'Thinking',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/thinking_zpswrkriwbh.png'
  },
  {
    name: 'Traveling',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/traveling_zps1tq7kjml.png'
  },
  {
    name: 'Watching Sports',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/watching%20sports_zpshiph91tx.png'
  },
  {
    name: 'Working',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/working_zpsjd2dcqht.png'
  },
  {
    name: 'Working Out',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/working%20out_zpsed0xurfw.png'
  },
  {
    name: 'Yoga',
    image: 'http://i558.photobucket.com/albums/ss30/mafez123/yoga_zpsorcekzjt.png'
  }
]

Activity.create(activities, (err) =>{
  if(err) {throw(err)}
  console.log(`Created ${activities.length} activities`);
  mongoose.connection.close();
});
