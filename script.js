let quizData = []; // Holds the questions
let allSongs = []; // Holds all songs for the dropdowns
let currentQuestionIndex = 0; // Tracks the current question
let groups = []; // Holds the groups fetched from the API
let score = 0; // Player's score

// Load groups and songs from the API
function loadGameData() {
    try {
        // Use the data directly from the included file
        groups = data.groups;

        // Flatten all songs into a single array with groupId for filtering
        allSongs = groups.flatMap(group => 
            group.songs.map(song => ({
                ...song,
                groupId: group.id
            }))
        );

        // Populate group checkboxes
        const groupOptions = document.getElementById('groupOptions');
        groups.forEach(group => {
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.value = group.id;
            checkbox.id = `group_${group.id}`;
            checkbox.className = 'form-checkbox h-5 w-5 text-green-500 border-gray-300 rounded';

            const label = document.createElement('label');
            label.htmlFor = checkbox.id;
            label.textContent = group.name;

            const wrapper = document.createElement('div');
            wrapper.className = 'flex items-center space-x-2';
            wrapper.appendChild(checkbox);
            wrapper.appendChild(label);

            groupOptions.appendChild(wrapper);
        });
        console.log('Groups and songs loaded:', { groups, allSongs });
    } catch (error) {
        console.error('Failed to load game data:', error);
    }
}




// Start the game
function startGame() {
    const selectedGroupIds = Array.from(
        document.querySelectorAll('#groupOptions input:checked')
    ).map(input => parseInt(input.value));

    if (selectedGroupIds.length === 0) {
        alert('Please select at least one group to start the game!');
        return;
    }

    const numQuestions = parseInt(document.getElementById('numQuestions').value);

    // Filter groups and songs
    window.filteredGroups = groups.filter(group => selectedGroupIds.includes(group.id));
    const filteredQuizData = allSongs.filter(song =>
        selectedGroupIds.includes(song.groupId)
    );

    if (filteredQuizData.length === 0) {
        alert('No songs available for the selected groups!');
        return;
    }

    // Shuffle and slice quiz data
    quizData = filteredQuizData.sort(() => Math.random() - 0.5).slice(0, numQuestions);

    console.log('New game started with quizData:', quizData);

    // Hide setup screen and show game screen
    document.getElementById('setupDiv').style.display = 'none';
    document.getElementById('gameDiv').style.display = 'block';

    loadQuestion();
}


function restartGame() {
    console.log('Restarting the game...');

    // Reset game state
    score = 0;
    currentQuestionIndex = 0;
    quizData = []; // Clear old questions
    window.filteredGroups = []; // Reset filtered groups

    // Reset dropdown menus
    const groupDropdown = document.getElementById('groupDropdown');
    const songDropdown = document.getElementById('songDropdown');
    if (groupDropdown) groupDropdown.innerHTML = '<option value="">Select a group</option>';
    if (songDropdown) songDropdown.innerHTML = '<option value="">Select a song</option>';

    // Reset result text
    const resultText = document.getElementById('result');
    if (resultText) resultText.textContent = '';

    // Reset audio player
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) audioPlayer.src = '';

    // Reload group options
    const groupOptions = document.getElementById('groupOptions');
    if (groupOptions) groupOptions.innerHTML = '';
    loadGameData();

    // Show setup screen and hide game and result screens
    document.getElementById('setupDiv').style.display = 'block';
    document.getElementById('gameDiv').style.display = 'none';
    document.getElementById('resultDiv').style.display = 'none';

    console.log('Game restarted. Ready for a new game.');
}



// Load a question
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        endGame();
        return;
    }

    const question = quizData[currentQuestionIndex];

    // Check if question data is valid
    if (!question || !question.file_path) {
        console.error('Invalid question data:', question);
        return;
    }

    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = `songs/${question.file_path}`;

    const groupDropdown = document.getElementById('groupDropdown');
    const songDropdown = document.getElementById('songDropdown');

    // Populate the group dropdown with filtered groups
    groupDropdown.innerHTML = '<option value="">Select a group</option>';
    window.filteredGroups.forEach(group => {
        const option = document.createElement('option');
        option.value = group.id;
        option.textContent = group.name;
        groupDropdown.appendChild(option);
    });

    // Listen for group selection to populate the song dropdown
    groupDropdown.addEventListener('change', () => {
        const selectedGroupId = parseInt(groupDropdown.value);

        // Filter allSongs to include only songs from the selected group
        const filteredSongs = allSongs.filter(song => song.groupId === selectedGroupId);

        // Populate the song dropdown
        songDropdown.innerHTML = '<option value="">Select a song</option>';
        filteredSongs.forEach(song => {
            const option = document.createElement('option');
            option.value = song.title;
            option.textContent = song.title;
            songDropdown.appendChild(option);
        });
    });

    document.getElementById('question').textContent = `Question ${currentQuestionIndex + 1}`;
}



// Submit an answer
function submitAnswer() {
    const groupDropdown = document.getElementById('groupDropdown');
    const songDropdown = document.getElementById('songDropdown');
    const selectedGroupId = parseInt(groupDropdown.value);
    const selectedSong = songDropdown.value;

    const currentQuestion = quizData[currentQuestionIndex];

    if (!selectedGroupId || !selectedSong) {
        alert('Please select both a group and a song!');
        return;
    }

    if (
        selectedGroupId === currentQuestion.groupId &&
        selectedSong === currentQuestion.title
    ) {
        score++;
        document.getElementById('result').textContent = 'Correct!';
    } else {
        const correctGroupName = groups.find(group => group.id === currentQuestion.groupId)?.name;
        document.getElementById('result').textContent = `Wrong!`;
    }

    currentQuestionIndex++;
    loadQuestion();
}


// End the game
function endGame() {
    // Hide the game screen
    document.getElementById('gameDiv').style.display = 'none';

    // Update result content
    document.getElementById('resultScore').textContent = `Your score: ${score}/${quizData.length}`;

    // Show the result screen
    const resultDiv = document.getElementById('resultDiv');
    resultDiv.style.display = 'block';

    // Attach the restart button event listener
    document.getElementById('restartButton').addEventListener('click', restartGame);
}



// Event listeners
document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

// Load game data on page load
document.addEventListener('DOMContentLoaded', loadGameData);
