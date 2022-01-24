# chessbot

## Description
Chess AI implementation of [AlphaGo Zero by Deepmind.](https://deepmind.com/blog/article/alphago-zero-starting-scratch) 

The algorithm is described in [this Medium article](https://medium.com/applied-data-science/how-to-build-your-own-alphazero-ai-using-python-and-keras-7f664945c188) 
![Alphago Zero](https://miro.medium.com/max/4000/1*0pn33bETjYOimWjlqDLLNw.png)

## Usage
install the requirements using
```
pip install -r requirements.txt
```
Command to run the app:
```
python app.py
```
Put ```localhost:5000``` into the browser to play against the bot.
Change NUM_SEARCHES in hyper_params.py to adjust the speed of the bot (lower number means faster but worse quality).
The browser should show something similar to this
![chess browser](https://i.imgur.com/e650meT.png)

## Adjustments
Unfortunately, my hardware could not handle self play as each move took considerable amount of  time (~30 sec) for only 400 searches per move.  
Alternatively, I retrieved chess data from high ranked players in http://www.pgnmentor.com/files.html. I recorded the rewards for moves from winning players as 1 and rewards for moves from losing players as -1. So the network will train to output low probability for moves from the losing players.

## File Structure
### datas\
Contains numpy training dataset for the network

### games\
Contains games in pgn file to be converted to numpy datasets. 

### models\
Contains checkpoint file to load the network weights

### static\ and template\
Contains js and html files to display UI in browser

### alpha_zero.py
Contains functions load_model to load the weights into the network, and get_move_probability which performs motecarlo tree search to get the move probability vector.

### game.py
Handles the actual game logic and generates datas.

### hyper_params.py
Contains various parameters as well as hyperparameters for the network. [IMPORTANT] NUM_SEARCHES is the parameter to set the number of Monte Carlo Tree Searches the algorithm makes before making a move. Changing this number higher will make more intelligent moves but takes more time per move. 

### model.py
Contains the network using tensorflow

### treesearch.py
Contains the implementation of the Monte Carlo Tree Search

## Results
Performs at ~1000 elo after training for ~10 hours with human game datas from http://www.pgnmentor.com/files.html with Intel UHD 620 CPU. 

