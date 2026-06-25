// Các biến toàn cục
const container = document.getElementById('quizContainer');
const modeSelect = document.getElementById('modeSelect');
const submitBtn = document.getElementById('submitBtn');
let currentMode = 'immediate';
let userAnswers = {};

// Hàm hiển thị toàn bộ câu hỏi
function renderQuiz() {
    container.innerHTML = ''; // Xóa sạch dữ liệu cũ
    userAnswers = {};
    
    questionBank.forEach((q, index) => {
        const questionHTML = `
            <div class="border border-gray-200 p-4 rounded-md" id="q-block-${q.id}">
                <div class="font-bold mb-3 text-lg">Câu ${index + 1}: ${q.question}</div>
                <div class="space-y-2 pl-4">
                    ${Object.entries(q.options).map(([key, value]) => `
                        <label class="block p-2 border rounded cursor-pointer hover:bg-gray-50 option-label" data-qid="${q.id}" data-key="${key}">
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
    });

    // Gọi KaTeX để render công thức Toán
    renderMath();
    updateUIByMode();
}

// Hàm kết xuất toán học bằng thư viện KaTeX
function renderMath() {
    renderMathInElement(container, {
        delimiters: [
            {left: '$$', right: '$$', display: true},
            {left: '$', right: '$', display: false}
        ],
        throwOnError: false
    });
}

// Xử lý sự kiện khi đổi chế độ
modeSelect.addEventListener('change', (e) => {
    currentMode = e.target.value;
    renderQuiz();
});

function updateUIByMode() {
    if (currentMode === 'deferred') {
        submitBtn.classList.remove('hidden');
    } else {
        submitBtn.classList.add('hidden');
    }
}

// Xử lý khi click vào 1 đáp án
window.handleSelect = function(qId, selectedKey, correctKey) {
    userAnswers[qId] = selectedKey;
    
    // Reset màu của tất cả option trong câu này
    const block = document.getElementById(`q-block-${qId}`);
    const labels = block.querySelectorAll('.option-label');
    labels.forEach(lbl => {
        lbl.classList.remove('bg-green-100', 'border-green-400', 'bg-red-100', 'border-red-400', 'bg-gray-200');
    });

    const selectedLabel = block.querySelector(`[data-key="${selectedKey}"]`);

    if (currentMode === 'immediate') {
        // Khóa các ô khác
        const radios = block.querySelectorAll('input[type="radio"]');
        radios.forEach(r => r.disabled = true);

        // Hiển thị lời giải
        document.getElementById(`expl-${qId}`).classList.remove('hidden');

        if (selectedKey === correctKey) {
            selectedLabel.classList.add('bg-green-100', 'border-green-400');
        } else {
            selectedLabel.classList.add('bg-red-100', 'border-red-400');
            const correctLabel = block.querySelector(`[data-key="${correctKey}"]`);
            correctLabel.classList.add('bg-green-100', 'border-green-400');
        }
    } else {
        // Chế độ Kiểm tra: Chỉ tô xám cái đang chọn
        selectedLabel.classList.add('bg-gray-200');
    }
}

// Xử lý khi nhấn nút Nộp bài
submitBtn.addEventListener('click', () => {
    let score = 0;
    questionBank.forEach(q => {
        const selected = userAnswers[q.id];
        const block = document.getElementById(`q-block-${q.id}`);
        const labels = block.querySelectorAll('.option-label');
        
        // Mở khóa lời giải
        document.getElementById(`expl-${q.id}`).classList.remove('hidden');
        
        if (selected === q.correctOption) {
            score++;
            block.querySelector(`[data-key="${selected}"]`).classList.replace('bg-gray-200', 'bg-green-100');
            block.querySelector(`[data-key="${selected}"]`).classList.add('border-green-400');
        } else {
            if(selected) {
                block.querySelector(`[data-key="${selected}"]`).classList.replace('bg-gray-200', 'bg-red-100');
                block.querySelector(`[data-key="${selected}"]`).classList.add('border-red-400');
            }
            block.querySelector(`[data-key="${q.correctOption}"]`).classList.add('bg-green-100', 'border-green-400');
        }
    });
    alert(`Bạn làm đúng ${score} / ${questionBank.length} câu.`);
    submitBtn.classList.add('hidden'); // Ẩn nút nộp sau khi hoàn thành
});

// Chạy lần đầu
renderQuiz();