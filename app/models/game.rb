class Game < ActiveRecord::Base
  validate :has_two_players?
  has_and_belongs_to_many :players

  def has_two_players?
    errors.add(:num_players_error, "must have 2 players") if players.length != 2
    self
  end
end
