get '/' do
  #if username doesn't exist, create player
  #create game



  erb :index
end

post '/' do

  # p1_username = params['p1_username']
  # p2_username = params['p2_username']

  # p1 = Player.find_by_username(p1_username)
  # unless p1
  #   p1 = Player.create(:username => p1_username) 
  # end

  # p2 = Player.find_by_username(p2_username)
  # unless p2
  #   p2 = Player.create(:username => p2_username)
  # end

  # game = Game.new
  # game.players << p1
  # game.players << p2

  # if game.valid? 
  #   game.save
  #   return "true"
  # else
  #   return game.errors
  # end
  return true
end

get '/outoforder' do
  erb :outoforder
end
