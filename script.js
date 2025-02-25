let quizData = []; // Holds the questions
let allSongs = []; // Holds all songs for the dropdowns
let currentQuestionIndex = 0; // Tracks the current question
let groups = []; // Holds the groups fetched from the API
let score = 0; // Player's score

document.getElementById('startButton').addEventListener('click', startGame);

// Set default behavior for submitAnswer
document.getElementById('submitAnswer').onclick = submitAnswer;

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
        // console.log('Groups and songs loaded:', { groups, allSongs });
        displaySongInfo();
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

    if (isNaN(numQuestions) || numQuestions <= 0) {
        alert("Please enter a positive number for the number of questions.");
        return;
    }

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

    showGameScreen(); // Switch to game screen
    loadQuestion();
}


function restartGame() {
    console.log('Restarting the game...');

    // Reset game state
    score = 0;
    currentQuestionIndex = 0;
    quizData = []; // Clear old questions
    window.filteredGroups = []; // Reset filtered groups

    // Reset dropdowns
    const groupDropdown = document.getElementById('groupDropdown');
    const songDropdown = document.getElementById('songDropdown');
    if (groupDropdown) {
        groupDropdown.style.display = 'block'; // Ensure it's visible
        groupDropdown.innerHTML = '<option value="">Select a group</option>';
    }
    if (songDropdown) {
        songDropdown.innerHTML = '<option value="">Select a song</option>';
    }

    // Reset result text
    document.getElementById('result').innerHTML = '';

    // Reset the Submit Answer button
    const submitAnswerButton = document.getElementById('submitAnswer');
    submitAnswerButton.textContent = "Submit Answer"; // Reset button text

    // Reset to the original Tailwind classes
    submitAnswerButton.classList.remove("bg-red-500", "hover:bg-red-600", "text-white"); // Remove red styles
    submitAnswerButton.classList.add("bg-green-500", "hover:bg-green-600"); // Add green styles

    submitAnswerButton.onclick = submitAnswer; // Reset button behavior

    // Reset audio player
    const audioPlayer = document.getElementById('audioPlayer');
    if (audioPlayer) audioPlayer.src = '';

    // Reload group options
    const groupOptions = document.getElementById('groupOptions');
    if (groupOptions) groupOptions.innerHTML = '';
    

    loadGameData();
    showSetupScreen();

    console.log('Game restarted. Ready for a new game.');
}



// Load a question
function loadQuestion() {

    const submitAnswerButton = document.getElementById('submitAnswer');
    if (currentQuestionIndex >= quizData.length) {
        // Update the button to say "See Your Score"
        submitAnswerButton.textContent = "結果発表";

        // Add Tailwind classes for the red style
        submitAnswerButton.classList.remove("bg-green-500", "hover:bg-green-600"); // Remove existing green styles
        submitAnswerButton.classList.add("bg-red-500", "hover:bg-red-600", "text-white"); // Add red styles

        // Change the button's functionality to transition to the result screen
        submitAnswerButton.onclick = () => {
            endGame();
        };

        return;
    }

    const question = quizData[currentQuestionIndex];

    // Check if question data is valid
    if (!question || !question.file_path) {
        console.error('Invalid question data:', question);
        return;
    }

    // Update the play button behavior
    const playButton = document.getElementById('playButton');
    playButton.style.pointerEvents = 'auto'; // Ensure it's clickable initially

    playButton.onclick = () => {
        const audio = new Audio(`songs/${question.file_path}`);
        document.getElementById('result').innerHTML = ""

        // Disable the play button while audio is playing
        playButton.style.pointerEvents = 'none';
        playButton.style.opacity = '0.5'; // Optional: visually indicate it's disabled

        audio.play();

        // Re-enable the play button when the audio ends
        audio.addEventListener('ended', () => {
            playButton.style.pointerEvents = 'auto';
            playButton.style.opacity = '1'; // Reset opacity
        });
    };

    const groupDropdown = document.getElementById('groupDropdown');
    const songDropdown = document.getElementById('songDropdown');
    const groupLabel = document.getElementById('groupLabel');

    // Reset dropdowns
    groupDropdown.innerHTML = '<option value="">Select a group</option>';
    songDropdown.innerHTML = '<option value="">Select a song</option>';

    // Populate group dropdown
    if (window.filteredGroups.length === 1) {
        // If only one group is selected
        const selectedGroup = window.filteredGroups[0];

        // Hide the group dropdown and auto-select the group
        groupDropdown.style.display = 'none';
        groupLabel.textContent = selectedGroup.name;

        // Populate the song dropdown with all songs from the selected group
        selectedGroup.songs.forEach(song => {
            const option = document.createElement('option');
            option.value = song.title;
            option.textContent = song.title;
            songDropdown.appendChild(option);
        });

        // console.log(`Only one group selected: ${selectedGroup.name}`);
    } else {
        // If multiple groups are selected, show both dropdowns
        groupDropdown.style.display = 'block';
        groupLabel.textContent = 'Choose a Group';

        // Populate group dropdown
        window.filteredGroups.forEach(group => {
            const option = document.createElement('option');
            option.value = group.id;
            option.textContent = group.name;
            groupDropdown.appendChild(option);
        });

        // Populate songs dynamically based on group selection
        groupDropdown.addEventListener('change', () => {
            const selectedGroupId = parseInt(groupDropdown.value);
            const filteredSongs = allSongs.filter(song => song.groupId === selectedGroupId);

            songDropdown.innerHTML = '<option value="">Select a song</option>';
            filteredSongs.forEach(song => {
                const option = document.createElement('option');
                option.value = song.title;
                option.textContent = song.title;
                songDropdown.appendChild(option);
            });
        });
    }

    // Reset button to its default behavior
    submitAnswerButton.textContent = "Submit Answer";
    submitAnswerButton.onclick = submitAnswer;

    // Update the question text
    document.getElementById('question').textContent = `第${currentQuestionIndex + 1}問`;
}


// Submit an answer
function submitAnswer() {
    const groupDropdown = document.getElementById('groupDropdown');
    const songDropdown = document.getElementById('songDropdown');
    let selectedGroupId = parseInt(groupDropdown.value);
    const selectedSong = songDropdown.value;

    // Automatically set group ID if only one group is selected
    if (window.filteredGroups.length === 1) {
        selectedGroupId = window.filteredGroups[0].id; // Auto-select the group
    }

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
        document.getElementById('result').textContent = '正解！すごい！';
    } else {
        const correctGroupName = groups.find(group => group.id === currentQuestion.groupId)?.name;
        document.getElementById('result').innerHTML = `残念！<br>正解は：<br>${correctGroupName}の<br>「<strong>${currentQuestion.title}</strong>」<br>でした`;

    }

    currentQuestionIndex++;
    loadQuestion();
}


// End the game
function endGame() {
    // Hide the game screen
    document.getElementById('gameDiv').style.display = 'none';

    // Update result content
    document.getElementById('resultScore').textContent = `${quizData.length}問中${score}正解`;

    // Show the result screen
    const resultDiv = document.getElementById('resultDiv');
    showResultScreen();

    // Attach the restart button event listener
    document.getElementById('restartButton').addEventListener('click', restartGame);
}

function displaySongInfo() {
    const songInfoDiv = document.getElementById('songInfo');

    // Calculate total number of songs
    const totalSongs = allSongs.length;

    // Calculate the number of songs for each group
    const groupSongCounts = groups.map(group => {
        const groupSongs = allSongs.filter(song => song.groupId === group.id);
        return {
            groupName: group.name,
            songCount: groupSongs.length
        };
    });

    // Build the HTML content
    let infoHtml = `<p>現在曲数：<strong>${totalSongs}</strong></p>`;
    infoHtml += `<ul>`;
    groupSongCounts.forEach(group => {
        infoHtml += `<li>${group.groupName}：${group.songCount}</li>`;
    });
    infoHtml += `</ul>`;

    // Update the songInfoDiv with the generated content
    songInfoDiv.innerHTML = infoHtml;
}

function showSetupScreen() {
    // Show the setup screen
    document.getElementById('setupDiv').style.display = 'block';
    document.getElementById('songInfo').style.display = 'block'; // Show song info

    // Hide other screens
    document.getElementById('gameDiv').style.display = 'none';
    document.getElementById('resultDiv').style.display = 'none';
}

function showGameScreen() {
    // Show the game screen
    document.getElementById('gameDiv').style.display = 'block';

    // Hide other screens
    document.getElementById('setupDiv').style.display = 'none';
    document.getElementById('songInfo').style.display = 'none'; // Hide song info
    document.getElementById('resultDiv').style.display = 'none';
}

function showResultScreen() {
    // Show the result screen
    document.getElementById('resultDiv').style.display = 'block';

    // Hide other screens
    document.getElementById('setupDiv').style.display = 'none';
    document.getElementById('songInfo').style.display = 'none'; // Hide song info
    document.getElementById('gameDiv').style.display = 'none';
}




// Event listeners
document.getElementById('startButton').addEventListener('click', startGame);
// document.getElementById('submitAnswer').addEventListener('click', submitAnswer);

// Load game data on page load
document.addEventListener('DOMContentLoaded', loadGameData);
