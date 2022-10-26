let id = '97896fca-f676-458d-8cad-31cb52fe7764';
let mdp = 'M2Dd36xm4xo2MOaKovH5cD98VPlw75sNCmmXmOSD';
let token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5Nzg5NmZjYS1mNjc2LTQ1OGQtOGNhZC0zMWNiNTJmZTc3NjQiLCJqdGkiOiJlNTAzMjlkZjZlZjY2Nzk0NWQ0ZTNhZjRjYzkyMTgyYTMwNGI1MDIyMWU1ZDU5NGVkZDZjMGY5Nzc4M2ZkNjE4Y2QxYTAzNDE1NTVjOTJmNiIsImlhdCI6MTY2NjE2NjI3MS40MDc1NDEsIm5iZiI6MTY2NjE2NjI3MS40MDc1NDMsImV4cCI6MTY5NzI3MDI3MS40MDA5ODQsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.Hd1pMkT5MeTGRCBnk7P4fs7eEa3L3GYlUxvT1uV6la9fs64XJNEAWYmeOh0r4hrlCz1haqynpftF7KvVpJtsM0WQBeA3YejQJrsydH7C8eSu2PyF2pdmCrPvy0DqEd7TdJfLkYBPOVTU3enUoOG0zqd4kAdqHyI1VgjGiXJMB2PLyS3xRZpGIxgp1H6u1aqv6h5slX45Nd7qcrRLDxrIp5vzOrQNBOtct8awcQkOgYua18AftBfcB6C5q-6Dd1qqlbmrKWYNZRLMr0uXMYL1SGqC_4GCarIiAluXUOcyF9KtzaWdX31m4i43iF74rJgF9uATF5Bgqdj38YA6gAH7J4Een1HPj6DYQqJb3GLM7cyv_Vc2EQE5wzqicMpmLA3k3yy1Oya88DrSsYhewrrwE0-lU8gO3uAaDFHfzqrrBFimYJnt89YN65TuiZp421v4vOYHdZfSMAWYR4tlFHw-XZAxzcT1QcosRxXVVLvVq4vqj9E6YTXg0-mDNAWWJLtCe1N_m46hfRaHv3Vod37ovaJ9nTHv2nRGhYrwtRkw7lPMS3WkE91aR-cEIVdoB8WAVZl7JUvVEfl4f5ko07eblEayLCnKJEmRq-tMcaKsLX0dzIcn_7YUIXssH4uzEvhdr9w5U97Lj1B0yVQE_0uh_mtzAimHUBi3gICq4dz8ZV8'


fetch('https://www.warcraftlogs.com/api/v2/client   ', {
  method: 'POST',
  headers: {
    "Content-Type": "application/json",
    'Authorization': `Bearer ${token}`,
  },
  body: JSON.stringify({
    query: `{
        characterData {
            character(name: "steakozor", serverSlug: "elune", serverRegion: "eu") {
                encounterRankings(encounterID: 2398, difficulty: 4)
            }
        }
    }`
  })
})
.then(res => res.json())
.then(res => console.log(res))