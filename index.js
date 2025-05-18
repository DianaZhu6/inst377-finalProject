const bodyParser = require('body-parser');
const express = require('express');
const supabaseClient = require('@supabase/supabase-js');
const dotenv=require('dotenv');
dotenv.config();

const app = express();
const port = 5500;
app.use(bodyParser.json());

app.use(express.static(__dirname+'/public'));
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = supabaseClient.createClient(supabaseUrl, supabaseKey);

app.get('/', (req, res) => {
  res.sendFile('public/favs.html', { root: __dirname });
});

app.get('/favorites', async (req, res) => {
  console.log('Attempting to GET all favorites');

  const { data, error } = await supabase.from('favorites').select();

  if (error) {
    console.log('Error');
    res.send(error);
  } else {
    res.send(data);
  }
});

app.post('/favorites', async (req, res) => {
  console.log('Adding favorites');

  console.log(req.body);
  var meal_name = req.body.meal_name;
  var meal_type = req.body.meal_type;
  var cooking_difficulty = req.body.cooking_difficulty;

const { data, error } = await supabase
    .from('favorites')
    .insert({
      meal_name: meal_name,
      meal_type: meal_type,
      cooking_difficulty: cooking_difficulty,
    })
    .select();

  if (error) {
    console.log('Error');
    res.send(error);
  } else {
    res.send(data);
  }
});

app.listen(port, () => {
    console.log('app alliiivieie', port);
})