const fs = require('fs');
const { gp_name, gp } = require('./hpiq_songlist'); // Adjust path if needed

const groups = gp_name.map((group, index) => {
    const songs = gp[index].map(song => ({
        title: song[0],
        file_path: song[1]
    }));
    return {
        id: index + 1,
        name: group[0],
        code: group[1],
        songs: songs
    };
});

// Write the data to a JSON file
fs.writeFileSync('data.json', JSON.stringify({ groups }, null, 2));

console.log('data.json has been created!');
