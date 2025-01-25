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

    // Filter groups to include only selected ones
    const filteredGroups = groups.filter(group => selectedGroupIds.includes(group.id));

    // Filter quizData to include only songs from selected groups
    const filteredQuizData = allSongs.filter(song => 
        selectedGroupIds.includes(song.groupId)
    );

    if (filteredQuizData.length === 0) {
        alert('No songs available for the selected groups!');
        return;
    }

    // Shuffle and slice the quiz data
    const shuffledData = filteredQuizData.sort(() => Math.random() - 0.5);
    quizData = shuffledData.slice(0, numQuestions);

    // Store filtered groups globally for the dropdown
    window.filteredGroups = filteredGroups;

    // Hide setup and show the game
    document.getElementById('setupDiv').style.display = 'none';
    document.getElementById('gameDiv').style.display = 'block';
    loadQuestion();
}



function restartGame() {
    // Reset game state
    score = 0;
    currentQuestionIndex = 0;

    // Show the setup page and hide the game page
    document.getElementById('setupDiv').style.display = 'block';
    document.getElementById('gameDiv').style.display = 'none';

    // Reset any dynamic content
    document.getElementById('groupOptions').innerHTML = '';
    loadGameData(); // Reload groups and songs
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
    const gameDiv = document.getElementById('gameDiv');
    gameDiv.innerHTML = `
        <h2>Game Over</h2>
        <p>Your score: ${score}/${quizData.length}</p>
        <button id="restartButton" class="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600 transition">Restart Game</button>
    `;

    // Add an event listener to the Restart button
    document.getElementById('restartButton').addEventListener('click', restartGame);
}


// Event listeners
document.getElementById('startButton').addEventListener('click', startGame);
document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

// Load game data on page load
document.addEventListener('DOMContentLoaded', loadGameData);
