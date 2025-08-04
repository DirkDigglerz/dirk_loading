local topPlayers = {}
local fetchInterval = 300 -- 5 minutes in seconds
local lastFetchTime = os.time() - fetchInterval -- Initialize to ensure fetch on first connection


MySQL.ready(function()
  -- Create the player_votes table if it doesn't exist
  MySQL.query.await([[
    CREATE TABLE IF NOT EXISTS player_votes (
      id INT AUTO_INCREMENT PRIMARY KEY,
      playerName VARCHAR(255) NOT NULL,
      votes INT DEFAULT 0,
      lastVoteTime DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  ]])
end)

local fetchTopPlayers = function()
  if os.time() - lastFetchTime < fetchInterval then
    return topPlayers
  end
  lastFetchTime = os.time()

  -- SQL STATEMENT TO FETCH TOP PLAYERS
  local result = MySQL.query.await('SELECT * FROM player_votes ORDER BY votes DESC LIMIT 10')
  topPlayers = result and #result > 0 and result or {}
  return topPlayers
end

getPlayersOfTheMonth = function()
  
end

votePlayer = function(src, targetId)

end

exports('votePlayer', votePlayer)