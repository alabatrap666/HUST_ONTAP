const container = document.getElementById('quizContainer');
const modeSelect = document.getElementById('modeSelect');
const submitBtn = document.getElementById('submitBtn');
const navGrid = document.getElementById('navGrid');

// Biến theo dõi thống kê
let currentMode = 'immediate';
let userAnswers = {};
let stats = { attempted: 0, correct: 0, wrong: 0 };

function initApp() {
    renderQuiz();
    renderMath();
}

function renderQuiz() {
    container.innerHTML = ''; 
    navGrid.innerHTML = '';
    userAnswers = {};
    stats = { attempted: 0, correct: 0, wrong: 0 };
    
    questionBank.forEach((q, index) => {
        // 1. Tạo phần tử Đề thi
        const questionHTML = `
            <div class="border border-gray-200 p-4 rounded-md bg-white shadow-sm" id="q-block-${q.id}">
                <div class="font-bold mb-3 text-lg">Câu ${index + 1}: ${q.question}</div>
                <div class="space-y-2 pl-4">
                    ${Object.entries(q.options).map(([key, value]) => `
                        <label class="block p-3 border rounded cursor-pointer hover:bg-gray-50 option-label transition" data-qid="${q.id}" data-key="${key}">
                            <input type="radio" name="question_${q.id}" value="${key}" class="mr-2 hidden" onchange="handleSelect(${q.id}, '${key}', '${q.correctOption}')">
                            <span class="font-semibold text-blue-600">${key}.</span> ${value}
                        </label>
                    `).join('')}
                </div>
                <div id="expl-${q.id}" class="hidden mt-4 p-3 bg-blue-50 text-blue-800 text-sm rounded border border-blue-200">
                    <strong>Giải thích:</strong> ${q.explanation}
                </div>
            </div>
        `;
        container.innerHTML += questionHTML;

        // 2. Tạo phần tử Điều hướng (Ô vuông)
        navGrid.innerHTML += `
            <button id="nav-btn-${q.id}" onclick="document.getElementById('q-block-${q.id}').scrollIntoView({behavior: 'smooth', block: 'center'})" 
                class="w-10 h-10 flex items-center justify-center font-bold text-gray-600 bg-gray-200 rounded hover:bg-gray-300 transition">
                ${index + 1}
            </button>
        `;
    });

    updateUIByMode();
    updateStatsDisplay();
}

function renderMath() {
    renderMathInElement(container, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ],
        throwOnError: false
    });
}

modeSelect.addEventListener('change', (e) => {
    currentMode = e.target.value;
    renderQuiz();
    renderMath(); // Render lại công thức khi reset
});

function updateUIByMode() {
    if (currentMode === 'deferred') {
        submitBtn.classList.remove('hidden');
        document.getElementById('statCorrect').parentElement.classList.add('hidden');
        document.getElementById('statWrong').parentElement.classList.add('hidden');
    } else {
        submitBtn.classList.add('hidden');
        document.getElementById('statCorrect').parentElement.classList.remove('hidden');
        document.getElementById('statWrong').parentElement.classList.remove('hidden');
    }
}

function updateStatsDisplay() {
    document.getElementById('statAttempted').innerText = `${stats.attempted} / ${questionBank.length}`;
    document.getElementById('statCorrect').innerText = stats.correct;
    document.getElementById('statWrong').innerText = stats.wrong;
}

window.handleSelect = function(qId, selectedKey, correctKey) {
    if (!userAnswers[qId]) {
        stats.attempted++; // Tăng biến đếm số câu đã làm nếu là lần chọn đầu tiên
    }
    userAnswers[qId] = selectedKey;
    
    const block = document.getElementById(`q-block-${qId}`);
    const navBtn = document.getElementById(`nav-btn-${qId}`);
    const labels = block.querySelectorAll('.option-label');
    
    labels.forEach(lbl => lbl.classList.remove('bg-green-100', 'border-green-400', 'bg-red-100', 'border-red-400', 'bg-blue-100', 'border-blue-400'));
    const selectedLabel = block.querySelector(`[data-key="${selectedKey}"]`);

    if (currentMode === 'immediate') {
        const radios = block.querySelectorAll('input[type="radio"]');
        radios.forEach(r => r.disabled = true);
        document.getElementById(`expl-${qId}`).classList.remove('hidden');

        if (selectedKey === correctKey) {
            selectedLabel.classList.add('bg-green-100', 'border-green-400');
            navBtn.classList.add('bg-green-500', 'text-white');
            navBtn.classList.remove('bg-gray-200', 'text-gray-600');
            stats.correct++;
        } else {
            selectedLabel.classList.add('bg-red-100', 'border-red-400');
            block.querySelector(`[data-key="${correctKey}"]`).classList.add('bg-green-100', 'border-green-400');
            navBtn.classList.add('bg-red-500', 'text-white');
            navBtn.classList.remove('bg-gray-200', 'text-gray-600');
            stats.wrong++;
        }
    } else {
        // Chế độ kiểm tra: Chỉ tô màu xanh lơ để biết là đã chọn
        selectedLabel.classList.add('bg-blue-100', 'border-blue-400');
        navBtn.classList.add('bg-blue-500', 'text-white');
        navBtn.classList.remove('bg-gray-200', 'text-gray-600');
    }
    
    updateStatsDisplay();
}

submitBtn.addEventListener('click', () => {
    stats.correct = 0;
    stats.wrong = 0;
    
    questionBank.forEach(q => {
        const selected = userAnswers[q.id];
        const block = document.getElementById(`q-block-${q.id}`);
        const navBtn = document.getElementById(`nav-btn-${q.id}`);
        
        document.getElementById(`expl-${q.id}`).classList.remove('hidden');
        
        if (selected === q.correctOption) {
            stats.correct++;
            block.querySelector(`[data-key="${selected}"]`).classList.replace('bg-blue-100', 'bg-green-100');
            block.querySelector(`[data-key="${selected}"]`).classList.replace('border-blue-400', 'border-green-400');
            navBtn.classList.replace('bg-blue-500', 'bg-green-500');
        } else {
            if(selected) {
                stats.wrong++;
                block.querySelector(`[data-key="${selected}"]`).classList.replace('bg-blue-100', 'bg-red-100');
                block.querySelector(`[data-key="${selected}"]`).classList.replace('border-blue-400', 'border-red-400');
                navBtn.classList.replace('bg-blue-500', 'bg-red-500');
            }
            block.querySelector(`[data-key="${q.correctOption}"]`).classList.add('bg-green-100', 'border-green-400');
            
            if(!selected) {
                navBtn.classList.replace('bg-gray-200', 'bg-red-500');
                navBtn.classList.add('text-white');
                stats.wrong++; // Bỏ trống tính là sai
            }
        }
    });

    // Mở khóa các ô thống kê đúng/sai
    document.getElementById('statCorrect').parentElement.classList.remove('hidden');
    document.getElementById('statWrong').parentElement.classList.remove('hidden');
    updateStatsDisplay();
    
    alert(`Bạn làm đúng ${stats.correct} / ${questionBank.length} câu.`);
    submitBtn.classList.add('hidden'); 
});

// Chạy hàm khởi tạo an toàn sau khi DOM tải xong
window.addEventListener('load', initApp);