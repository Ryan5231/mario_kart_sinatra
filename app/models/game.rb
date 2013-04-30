class Game < ActiveRecord::Base
  validate :has_two_players?
  has_and_belongs_to_many :players

  def has_two_players?
    if players.count != 2
      errors.add(:num_players_error, "must have 2 players")
    end
  end
end
