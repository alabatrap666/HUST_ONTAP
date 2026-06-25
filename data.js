const questionBank = [
{
"id": 1,
"subject": "it",
"question": "Theo Alan Turing (1950), câu hỏi 'Máy tính có thể suy nghĩ được không?' được chuyển thành câu hỏi nào?",
"options": {
"A": "Máy tính có thể tính toán nhanh hơn con người không?",
"B": "Máy tính có thể hành động một cách thông minh được không?",
"C": "Máy tính có thể vượt qua con người không?",
"D": "Máy tính có thể tự học được không?"
},
"correctOption": "B",
"explanation": "Turing đã đề xuất chuyển câu hỏi trừu tượng về suy nghĩ thành việc kiểm chứng xem máy tính có thể hành động một cách thông minh (giống con người) hay không thông qua Imitation Game."
},
{
"id": 2,
"subject": "it",
"question": "Theo phân loại, các định nghĩa về Trí tuệ nhân tạo (TTNT) được chia thành mấy nhóm chính?",
"options": {
"A": "2 nhóm",
"B": "3 nhóm",
"C": "4 nhóm",
"D": "5 nhóm"
},
"correctOption": "C",
"explanation": "Các định nghĩa về TTNT được chia thành 4 nhóm: Suy nghĩ như người, Suy nghĩ hợp lý, Hành động như người, và Hành động hợp lý."
},
{
"id": 3,
"subject": "it",
"question": "Hệ thống Watson của IBM đã nổi tiếng khi đánh bại con người trong lĩnh vực nào vào năm 2011?",
"options": {
"A": "Cờ vua (Chess)",
"B": "Cờ vây (Go)",
"C": "Game show trả lời tự động (Jeopardy!)",
"D": "Lái xe tự động"
},
"correctOption": "C",
"explanation": "Năm 2011, siêu máy tính Watson đã đánh bại 2 đối thủ người tại game show hỏi đáp Jeopardy!."
},
{
"id": 4,
"subject": "it",
"question": "Mô hình mạng GAN (Generative Adversarial Nets) được giới thiệu lần đầu vào năm 2014 bởi ai?",
"options": {
"A": "Alan Turing",
"B": "Ian Goodfellow",
"C": "Jeff Dean",
"D": "Andrew Ng"
},
"correctOption": "B",
"explanation": "GAN được tạo ra bởi Ian Goodfellow và cộng sự vào năm 2014, có khả năng tạo ra trí tưởng tượng nhân tạo (ví dụ: sinh khuôn mặt người giả)."
},
{
"id": 5,
"subject": "it",
"question": "Sự kiện AlphaGo (Google) đánh bại đại kiện tướng Lee Sedol diễn ra vào thời gian nào?",
"options": {
"A": "Tháng 3/2016",
"B": "Tháng 5/1997",
"C": "Năm 2012",
"D": "Năm 2018"
},
"correctOption": "A",
"explanation": "AlphaGo đã thắng đại kiện tướng cờ vây Lee Sedol vào tháng 3/2016, đánh dấu một bước tiến lớn của AI do cờ vây là một trò chơi cực kỳ phức tạp."
},
{
"id": 6,
"subject": "it",
"question": "Khái niệm về Trí tuệ nhân tạo (AI) được chính thức thừa nhận tại Workshop diễn ra ở đâu vào năm 1956?",
"options": {
"A": "Stanford",
"B": "MIT",
"C": "Dartmouth",
"D": "Harvard"
},
"correctOption": "C",
"explanation": "Workshop diễn ra tại Dartmouth (Mỹ) trong 2 tháng vào năm 1956 là nơi lĩnh vực TTNT được chính thức hình thành và thừa nhận."
},
{
"id": 7,
"subject": "it",
"question": "Sự kiện nào đánh dấu 'The first AI winter' (Mùa đông AI đầu tiên)?",
"options": {
"A": "1950 - 1956",
"B": "1966 - 1973",
"C": "1987 - 1993",
"D": "1980 - 1988"
},
"correctOption": "B",
"explanation": "Giai đoạn 1966-1973 được coi là 'The first AI winter' khi các nhà nghiên cứu nhận ra những khó khăn lớn về độ phức tạp tính toán và mạng nơ-ron gần như bị bỏ rơi."
},
{
"id": 8,
"subject": "it",
"question": "Hệ thống máy tính nào đã đánh bại đại kiện tướng cờ vua thế giới vào năm 1997?",
"options": {
"A": "Watson",
"B": "AlphaGo",
"C": "Deep Blue",
"D": "Google Brain"
},
"correctOption": "C",
"explanation": "Hệ thống Deep Blue của IBM đã đánh bại đại kiện tướng cờ vua Garry Kasparov vào năm 1997."
},
{
"id": 9,
"subject": "it",
"question": "Tác tử (Agent) tương tác với môi trường của nó thông qua các bộ phận nào?",
"options": {
"A": "Cảm biến (sensors) và bộ nhớ (memory)",
"B": "Cảm biến (sensors) và bộ hoạt động (actuators)",
"C": "CPU và thiết bị I/O",
"D": "Mạng nơ-ron và hàm mục tiêu"
},
"correctOption": "B",
"explanation": "Tác tử nhận biết môi trường qua các bộ cảm biến (sensors) và thực hiện hành động thông qua các bộ phận hoạt động (actuators)."
},
{
"id": 10,
"subject": "it",
"question": "Hàm tác tử (Agent function) là một ánh xạ từ đâu tới đâu?",
"options": {
"A": "Từ tập trạng thái tới tập mục tiêu",
"B": "Từ nhận thức hiện tại tới hành động",
"C": "Từ lịch sử nhận thức tới các hành động",
"D": "Từ luật If-Then tới tập kết quả"
},
"correctOption": "C",
"explanation": "Hàm tác tử ánh xạ từ toàn bộ lịch sử nhận thức (percept sequence) tới một hành động cụ thể."
},
{
"id": 11,
"subject": "it",
"question": "Trong mô hình PEAS dùng để thiết kế tác tử, chữ 'P' viết tắt của từ gì?",
"options": {
"A": "Problem",
"B": "Percepts",
"C": "Performance measure",
"D": "Planning"
},
"correctOption": "C",
"explanation": "PEAS bao gồm Performance measure (Tiêu chí đánh giá), Environment (Môi trường), Actuators (Bộ phận hành động), và Sensors (Cảm biến)."
},
{
"id": 12,
"subject": "it",
"question": "Đối với thiết kế một tác tử lái xe taxi tự động, yếu tố nào dưới đây thuộc 'Environment' (E) trong mô hình PEAS?",
"options": {
"A": "Bánh lái, chân ga, phanh",
"B": "An toàn, nhanh, đúng luật",
"C": "Camera, GPS, đồng hồ tốc độ",
"D": "Đường phố, người đi bộ, phương tiện khác"
},
"correctOption": "D",
"explanation": "Đường phố, người đi bộ, các phương tiện khác là môi trường (Environment) mà chiếc xe taxi phải tương tác."
},
{
"id": 13,
"subject": "it",
"question": "Kiểu môi trường nào mà trạng thái tiếp theo được xác định hoàn toàn dựa trên trạng thái hiện tại và hành động của tác tử?",
"options": {
"A": "Xác định (Deterministic)",
"B": "Ngẫu nhiên (Stochastic)",
"C": "Quan sát được hoàn toàn (Fully observable)",
"D": "Rời rạc (Discrete)"
},
"correctOption": "A",
"explanation": "Trong môi trường xác định (Deterministic), trạng thái tiếp theo phụ thuộc hoàn toàn vào trạng thái hiện tại và hành động của tác tử."
},
{
"id": 14,
"subject": "it",
"question": "Môi trường mà trong khi tác tử cân nhắc hành động, bản thân môi trường không thay đổi, được gọi là gì?",
"options": {
"A": "Động (Dynamic)",
"B": "Tĩnh (Static)",
"C": "Bán động (Semi-dynamic)",
"D": "Phân đoạn (Episodic)"
},
"correctOption": "B",
"explanation": "Môi trường tĩnh (Static) không thay đổi trạng thái trong khoảng thời gian tác tử đang tính toán/cân nhắc."
},
{
"id": 15,
"subject": "it",
"question": "Tác tử nào chỉ hành động dựa trên một quy tắc có điều kiện phù hợp với trạng thái hiện thời, bỏ qua lịch sử nhận thức?",
"options": {
"A": "Tác tử phản xạ đơn giản (Simple reflex agents)",
"B": "Tác tử dựa trên mô hình (Model-based reflex agents)",
"C": "Tác tử dựa trên mục tiêu (Goal-based agents)",
"D": "Tác tử dựa trên lợi ích (Utility-based agents)"
},
"correctOption": "A",
"explanation": "Tác tử phản xạ đơn giản chọn hành động dựa vào trạng thái hiện tại bằng các luật điều kiện-hành động (Condition-action rules)."
},
{
"id": 16,
"subject": "it",
"question": "Sự khác biệt chính của tác tử phản xạ dựa trên mô hình (Model-based reflex agents) so với tác tử phản xạ đơn giản là gì?",
"options": {
"A": "Sử dụng một hàm lợi ích (Utility function) để đánh giá",
"B": "Lưu giữ và cập nhật một mô hình nội bộ về trạng thái của thế giới",
"C": "Có khả năng tự học hỏi và cập nhật kiến thức",
"D": "Biết trước toàn bộ các trạng thái đích"
},
"correctOption": "B",
"explanation": "Tác tử dựa trên mô hình duy trì một trạng thái nội bộ (internal state) theo dõi sự tiến hóa của thế giới, giúp xử lý các môi trường quan sát một phần."
},
{
"id": 17,
"subject": "it",
"question": "Để giải quyết bài toán giữa nhiều con đường dẫn đến đích, việc chọn đường nhanh hơn, chi phí thấp hơn là đặc trưng của loại tác tử nào?",
"options": {
"A": "Goal-based agents (Dựa trên mục tiêu)",
"B": "Model-based agents (Dựa trên mô hình)",
"C": "Utility-based agents (Dựa trên lợi ích)",
"D": "Learning agents (Có khả năng học)"
},
"correctOption": "C",
"explanation": "Tác tử dựa trên lợi ích (Utility-based agent) sử dụng hàm lợi ích để ánh xạ trạng thái sang số thực, nhằm tối ưu hóa sự 'hạnh phúc' hay hiệu quả giữa nhiều lựa chọn đạt mục tiêu."
},
{
"id": 18,
"subject": "it",
"question": "Thành phần nào của một tác tử có khả năng học (Learning Agent) chịu trách nhiệm đánh giá hiệu quả hoạt động để đưa ra phản hồi?",
"options": {
"A": "Thành phần hành động (Performance Element)",
"B": "Thành phần học (Learning Element)",
"C": "Thành phần đánh giá (Critic)",
"D": "Bộ sản sinh vấn đề (Problem Generator)"
},
"correctOption": "C",
"explanation": "Thành phần đánh giá (Critic) so sánh hiệu quả hoạt động với một tiêu chuẩn và gửi feedback cho thành phần học."
},
{
"id": 19,
"subject": "it",
"question": "Trong bài toán tìm kiếm, một giải pháp (solution) được định nghĩa là gì?",
"options": {
"A": "Một trạng thái có chi phí thấp nhất",
"B": "Một chuỗi các hành động cho phép dẫn từ trạng thái đầu đến trạng thái đích",
"C": "Một tập hợp các trạng thái đã được mở rộng",
"D": "Đồ thị biểu diễn toàn bộ không gian trạng thái"
},
"correctOption": "B",
"explanation": "Giải pháp của bài toán tìm kiếm là một chuỗi các hành động thực thi giúp tác tử di chuyển từ trạng thái khởi đầu (initial state) tới một trạng thái đích (goal state)."
},
{
"id": 20,
"subject": "it",
"question": "Bước đầu tiên trong quá trình giải quyết vấn đề bằng tìm kiếm là gì?",
"options": {
"A": "Phát biểu bài toán (Problem formulation)",
"B": "Lựa chọn giải thuật tìm kiếm",
"C": "Xác định mục tiêu cần đạt đến (Goal formulation)",
"D": "Phát triển các nút trên cây tìm kiếm"
},
"correctOption": "C",
"explanation": "Quá trình bắt đầu bằng việc Xác định mục tiêu (Goal formulation) dựa trên trạng thái hiện tại, sau đó mới Phát biểu bài toán (Problem formulation)."
},
{
"id": 21,
"subject": "it",
"question": "Loại bài toán nào mà tác tử hoàn toàn không thể quan sát được trạng thái hiện tại của mình?",
"options": {
"A": "Bài toán trạng thái đơn (Single-state problem)",
"B": "Bài toán thiếu cảm nhận (Sensorless / Conformant problem)",
"C": "Bài toán có sự kiện ngẫu nhiên (Contingency problem)",
"D": "Bài toán thăm dò (Exploration problem)"
},
"correctOption": "B",
"explanation": "Bài toán thiếu cảm nhận (Sensorless) là trường hợp tác tử không quan sát được môi trường, nên nó phải coi trạng thái hiện tại là một tập hợp các trạng thái có thể."
},
{
"id": 22,
"subject": "it",
"question": "Nếu chi phí bước (step cost) để đi từ trạng thái x đến y qua hành động a là hàm $c(x,a,y)$, tính chất nào sau đây thường được yêu cầu để các thuật toán tìm kiếm tối ưu hoạt động đúng?",
"options": {
"A": "$c(x,a,y) < 0$",
"B": "$c(x,a,y) = 0$",
"C": "$c(x,a,y) \ge 0$",
"D": "$c(x,a,y) \le 0$"
},
"correctOption": "C",
"explanation": "Chi phí bước đường đi luôn được giả định là không âm ($c(x,a,y) \ge 0$) để tránh chu trình có tổng chi phí âm, khiến thuật toán tìm kiếm vô hạn."
},
{
"id": 23,
"subject": "it",
"question": "Khi chuyển đổi một đồ thị tìm kiếm thành cây tìm kiếm, chúng ta phải làm gì với các vòng lặp trong đồ thị?",
"options": {
"A": "Giữ nguyên các vòng lặp để cây tìm kiếm đầy đủ",
"B": "Chuyển vòng lặp thành các nút lá đặc biệt",
"C": "Loại bỏ các vòng lặp để tránh không duyệt lặp lại vô hạn một nút",
"D": "Đảo ngược chiều các cạnh trong vòng lặp"
},
"correctOption": "C",
"explanation": "Các vòng lặp (chu trình) trong đồ thị phải được xử lý hoặc loại bỏ trong khi xây dựng cây tìm kiếm (bằng mảng 'closed' hoặc logic sinh nút) để tránh duyệt vô hạn."
},
{
"id": 24,
"subject": "it",
"question": "Trong thuật toán Tìm kiếm theo chiều rộng (BFS), danh sách chờ (fringe/frontier) được cài đặt bằng cấu trúc dữ liệu nào?",
"options": {
"A": "Ngăn xếp (Stack - LIFO)",
"B": "Hàng đợi (Queue - FIFO)",
"C": "Hàng đợi ưu tiên (Priority Queue)",
"D": "Danh sách liên kết đôi (Doubly Linked List)"
},
"correctOption": "B",
"explanation": "BFS sử dụng cấu trúc hàng đợi FIFO để đảm bảo các nút ở độ sâu nông hơn được mở rộng trước các nút sâu hơn."
},
{
"id": 25,
"subject": "it",
"question": "Độ phức tạp về thời gian của Tìm kiếm theo chiều rộng (BFS) là bao nhiêu, với $b$ là hệ số phân nhánh và $d$ là độ sâu của lời giải?",
"options": {
"A": "$O(bd)$",
"B": "$O(b^{m})$",
"C": "$O(b^{d+1})$",
"D": "$O(d^{b})$"
},
"correctOption": "C",
"explanation": "BFS duyệt mọi nút theo từng tầng, nên trong trường hợp xấu nhất số nút được sinh ra là $1 + b + b^2 + ... + b^d + b^{d+1} = O(b^{d+1})$."
},
{
"id": 26,
"subject": "it",
"question": "Thuật toán tìm kiếm theo chiều rộng (BFS) có đảm bảo tìm được lời giải tối ưu không?",
"options": {
"A": "Luôn luôn tối ưu trong mọi trường hợp",
"B": "Có, nhưng chỉ khi chi phí cho mỗi bước (cạnh) là như nhau (ví dụ = 1)",
"C": "Không bao giờ tối ưu",
"D": "Chỉ tối ưu nếu không gian trạng thái là vô hạn"
},
"correctOption": "B",
"explanation": "BFS luôn tìm ra đường đi ngắn nhất về MẶT SỐ LƯỢNG BƯỚC. Nếu mọi bước có chi phí bằng nhau, nó sẽ tối ưu. Nếu chi phí khác nhau, BFS không đảm bảo tối ưu."
},
{
"id": 27,
"subject": "it",
"question": "Trong thuật toán Tìm kiếm với chi phí cực tiểu (Uniform-cost search - UCS), danh sách chờ ưu tiên mở rộng nút nào trước?",
"options": {
"A": "Nút có độ sâu thấp nhất",
"B": "Nút được sinh ra gần đây nhất",
"C": "Nút có chi phí đường đi từ nút gốc đến nó nhỏ nhất",
"D": "Nút có giá trị đánh giá hàm heuristic nhỏ nhất"
},
"correctOption": "C",
"explanation": "UCS luôn chọn mở rộng nút $n$ có chi phí $g(n)$ nhỏ nhất trong tập fringe."
},
{
"id": 28,
"subject": "it",
"question": "Thuật toán Uniform-cost search (UCS) sử dụng cấu trúc dữ liệu nào cho tập fringe?",
"options": {
"A": "FIFO queue",
"B": "LIFO queue",
"C": "Priority queue",
"D": "Hash table"
},
"correctOption": "C",
"explanation": "UCS lưu tập fringe theo dạng hàng đợi ưu tiên (Priority Queue) sắp xếp theo chi phí $g(n)$ tăng dần."
},
{
"id": 29,
"subject": "it",
"question": "Nếu chi phí của mọi bước đều bằng nhau, UCS sẽ hoạt động giống hệt thuật toán nào?",
"options": {
"A": "Tìm kiếm theo chiều sâu (DFS)",
"B": "Tìm kiếm sâu dần (IDS)",
"C": "Tìm kiếm giới hạn độ sâu (DLS)",
"D": "Tìm kiếm theo chiều rộng (BFS)"
},
"correctOption": "D",
"explanation": "Nếu mọi cạnh có trọng số như nhau, nút có $g(n)$ nhỏ nhất chính là nút có độ sâu nông nhất, khiến UCS trở thành BFS."
},
{
"id": 30,
"subject": "it",
"question": "Trong thuật toán Tìm kiếm theo chiều sâu (DFS), danh sách chờ (fringe) hoạt động theo nguyên tắc nào?",
"options": {
"A": "LIFO (Vào sau ra trước)",
"B": "FIFO (Vào trước ra trước)",
"C": "Chi phí thấp nhất ra trước",
"D": "Chọn ngẫu nhiên"
},
"correctOption": "A",
"explanation": "DFS dùng cấu trúc ngăn xếp (Stack) với nguyên tắc LIFO để phát triển các nhánh con sâu nhất hiện tại trước."
},
{
"id": 31,
"subject": "it",
"question": "Độ phức tạp về không gian (bộ nhớ) của Tìm kiếm theo chiều sâu (DFS) là bao nhiêu, với $m$ là độ sâu tối đa và $b$ là hệ số phân nhánh?",
"options": {
"A": "$O(b^{m})$",
"B": "$O(bm)$",
"C": "$O(b^{d+1})$",
"D": "$O(bd)$"
},
"correctOption": "B",
"explanation": "DFS chỉ cần lưu trữ đường đi hiện tại từ gốc đến nút lá và các nút anh em chưa được mở rộng, nên độ phức tạp bộ nhớ là tuyến tính $O(bm)$."
},
{
"id": 32,
"subject": "it",
"question": "Thuật toán tìm kiếm nào có nhược điểm chí mạng là có thể bị mắc kẹt vĩnh viễn (không hoàn chỉnh) nếu không gian trạng thái có độ sâu vô hạn?",
"options": {
"A": "BFS",
"B": "UCS",
"C": "DFS",
"D": "IDS"
},
"correctOption": "C",
"explanation": "DFS không có tính hoàn chỉnh trong không gian có độ sâu vô hạn vì nó có thể đi dọc xuống một nhánh dài vô tận mà không bao giờ quay lại."
},
{
"id": 33,
"subject": "it",
"question": "Thuật toán Tìm kiếm giới hạn độ sâu (DLS) khắc phục nhược điểm đi sâu vô hạn của DFS bằng cách nào?",
"options": {
"A": "Kiểm tra xem trạng thái đã được thăm chưa",
"B": "Sử dụng một giới hạn độ sâu $l$, không khai triển các nút ở độ sâu này",
"C": "Chuyển sang dùng cấu trúc hàng đợi FIFO sau khi đạt độ sâu $l$",
"D": "Đánh giá chi phí tại mỗi bước"
},
"correctOption": "B",
"explanation": "DLS áp đặt một mức giới hạn $l$. Các nút ở độ sâu $l$ được xem như không có nút con, giúp DFS không đi xuống vô tận."
},
{
"id": 34,
"subject": "it",
"question": "Nhược điểm lớn nhất của Tìm kiếm giới hạn độ sâu (DLS) là gì?",
"options": {
"A": "Tốn quá nhiều bộ nhớ giống như BFS",
"B": "Thất bại nếu tất cả các đích nằm ở độ sâu lớn hơn giới hạn $l$",
"C": "Thất bại nếu đích nằm ở độ sâu nhỏ hơn giới hạn $l$",
"D": "Độ phức tạp thời gian tăng lên thành hàm mũ bậc 2"
},
"correctOption": "B",
"explanation": "Nếu đích thực sự nằm ở mức độ sâu lớn hơn $l$, DLS sẽ trả về thất bại (không tìm thấy lời giải)."
},
{
"id": 35,
"subject": "it",
"question": "Thuật toán Tìm kiếm sâu dần (Iterative Deepening Search - IDS) kết hợp được ưu điểm của hai thuật toán nào?",
"options": {
"A": "UCS và A*",
"B": "DFS và BFS",
"C": "DLS và UCS",
"D": "Heuristic và BFS"
},
"correctOption": "B",
"explanation": "IDS lặp lại DLS với mức $l$ tăng dần từ 0, 1, 2... Do đó nó tận dụng bộ nhớ thấp của DFS $O(bd)$ nhưng lại đạt tính hoàn chỉnh và tìm đường ngắn nhất như BFS."
},
{
"id": 36,
"subject": "it",
"question": "Độ phức tạp bộ nhớ (không gian) của thuật toán IDS là bao nhiêu ($d$ là độ sâu của đích)?",
"options": {
"A": "$O(b^{d})$",
"B": "$O(bd)$",
"C": "$O(b^{m})$",
"D": "$O(b^{d+1})$"
},
"correctOption": "B",
"explanation": "IDS chạy DFS đến độ sâu $d$, nên nó chỉ yêu cầu không gian bộ nhớ tuyến tính $O(bd)$ giống như DFS."
},
{
"id": 37,
"subject": "it",
"question": "Về số lượng nút được sinh ra, thuật toán IDS có lãng phí đáng kể so với BFS không?",
"options": {
"A": "Lãng phí cực kỳ lớn, tốn thời gian gấp $O(b)$ lần.",
"B": "Có lãng phí nhưng rất nhỏ, chỉ khoảng 11% (với $b=10$).",
"C": "Hoàn toàn không lãng phí, số nút sinh ra bằng chính xác BFS.",
"D": "Nó sinh ra ít nút hơn BFS."
},
"correctOption": "B",
"explanation": "Dù IDS lặp lại việc sinh các nút ở tầng nông nhiều lần, nhưng đa số các nút nằm ở các tầng lá cùng (chiếm phần lớn). Sự lãng phí là rất nhỏ (khoảng 11% ở $b=10$)."
},
{
"id": 38,
"subject": "it",
"question": "Cấu trúc dữ liệu của một Nút (Node) trên cây tìm kiếm KHÔNG bao gồm thuộc tính nào dưới đây?",
"options": {
"A": "Trạng thái (State)",
"B": "Chi phí đường đi $g(x)$",
"C": "Hành động (Action) đã tạo ra nó",
"D": "Danh sách tất cả các trạng thái chưa được khám phá trong tương lai"
},
"correctOption": "D",
"explanation": "Nút bao gồm State, Parent, Action, Depth, và Path-cost. Nó không thể biết toàn bộ tương lai chưa được khám phá."
},
{
"id": 39,
"subject": "it",
"question": "Đặc tính 'Tính hoàn chỉnh (Complete)' của một thuật toán tìm kiếm có ý nghĩa là gì?",
"options": {
"A": "Nó duyệt qua tất cả các đỉnh của đồ thị",
"B": "Nó chắc chắn tìm được lời giải tối ưu (chi phí thấp nhất)",
"C": "Nó đảm bảo tìm được một lời giải nếu thực sự tồn tại lời giải",
"D": "Nó không bị lặp vô hạn"
},
"correctOption": "C",
"explanation": "Tính hoàn chỉnh đảm bảo thuật toán sẽ kết thúc với một giải pháp hợp lệ nếu bài toán đó có giải pháp."
},
{
"id": 40,
"subject": "it",
"question": "Trong bài toán tìm đường từ Arad đến Bucharest, trạng thái ban đầu là gì?",
"options": {
"A": "Đang ở thành phố Bucharest",
"B": "Đang ở thành phố Arad",
"C": "Chuỗi các thành phố Arad, Sibiu, Fagaras",
"D": "Chi phí đường đi bằng 0"
},
"correctOption": "B",
"explanation": "Trạng thái khởi đầu (Initial state) của hành trình là lúc tác tử đang ở thành phố xuất phát (Arad)."
},
{
"id": 41,
"subject": "it",
"question": "Quá trình trừu tượng hóa (abstraction) không gian trạng thái nhằm mục đích gì?",
"options": {
"A": "Biến bài toán đơn giản thành phức tạp hơn",
"B": "Giữ lại mọi chi tiết thực tế để AI học hỏi",
"C": "Loại bỏ các chi tiết không cần thiết để không gian trạng thái thuận tiện cho quá trình tìm kiếm",
"D": "Chuyển bài toán thành dạng đồ thị vô hướng"
},
"correctOption": "C",
"explanation": "Trừu tượng hóa giúp khái quát các trạng thái và hành động, bỏ qua các chi tiết không quan trọng (vd: lái xe vòng vèo, chỗ nghỉ ngơi) để tập trung tìm giải pháp mức cao."
},
{
"id": 42,
"subject": "it",
"question": "Bài toán máy hút bụi với không gian có 2 phòng sẽ có tối đa bao nhiêu trạng thái nếu xét vị trí máy (2) và tình trạng rác ở 2 phòng (2^2)?",
"options": {
"A": "4 trạng thái",
"B": "6 trạng thái",
"C": "8 trạng thái",
"D": "16 trạng thái"
},
"correctOption": "C",
"explanation": "Trạng thái phụ thuộc vào: máy ở phòng 1 hay 2 (2 vị trí), phòng 1 bẩn hay sạch (2 trạng thái), phòng 2 bẩn hay sạch (2 trạng thái). Tổng = 2 x 2 x 2 = 8 trạng thái."
},
{
"id": 43,
"subject": "it",
"question": "Trong thuật toán Tìm kiếm cây (Tree Search), hàm EXPAND(node, problem) trả về cái gì?",
"options": {
"A": "Một trạng thái đích",
"B": "Một tập các nút con (successors) mới được sinh ra từ nút đó",
"C": "Chi phí đường đi lớn nhất",
"D": "Một mảng chứa tất cả đồ thị"
},
"correctOption": "B",
"explanation": "Hàm EXPAND lấy một nút làm đầu vào, kiểm tra tất cả các hành động khả thi từ trạng thái của nút đó và sinh ra một tập các nút con (successors)."
},
{
"id": 44,
"subject": "it",
"question": "Việc kiểm tra trạng thái đích (Goal Test) trong thuật toán BFS được thực hiện khi nào?",
"options": {
"A": "Khi nút được sinh ra",
"B": "Khi nút được lấy ra khỏi fringe để xét",
"C": "Sau khi toàn bộ cây đã được mở rộng",
"D": "Tại thời điểm tính toán chi phí hàm heuristic"
},
"correctOption": "B",
"explanation": "Trong mã giả tiêu chuẩn, thuật toán lấy phần tử n = GET_FIRST(fringe), sau đó ngay lập tức kiểm tra if (n thuộc DICH)."
},
{
"id": 45,
"subject": "it",
"question": "Trong bài toán tìm kiếm cơ bản, hành động (Action) chuyển tác tử từ trạng thái này sang trạng thái khác được mô tả toán học bởi hàm nào?",
"options": {
"A": "Hàm mục tiêu $Goal(x)$",
"B": "Hàm chuyển trạng thái (Transition Model) / Hàm sinh nút kề $\Gamma(n)$",
"C": "Hàm chi phí $g(n)$",
"D": "Hàm heuristic $h(n)$"
},
"correctOption": "B",
"explanation": "Hàm chuyển trạng thái (hoặc hàm $\Gamma(n)$) nhận vào một trạng thái và trả về tập hợp các hành động có thể cùng với trạng thái tiếp theo tương ứng."
},
{
"id": 46,
"subject": "it",
"question": "Trong các chiến lược tìm kiếm cơ bản (Uninformed Search), điều gì là đúng?",
"options": {
"A": "Thuật toán có sử dụng tri thức bổ sung về khoảng cách ước lượng đến đích",
"B": "Thuật toán chỉ sử dụng các thông tin được cung cấp trong chính định nghĩa của bài toán (trạng thái, hành động, đích)",
"C": "Luôn tìm được lời giải nhanh hơn Informed Search",
"D": "Chỉ dùng cho bài toán AI chơi cờ"
},
"correctOption": "B",
"explanation": "Tìm kiếm mù (Uninformed search) không biết độ gần/xa so với đích ngoài việc kiểm tra xem một trạng thái có phải là đích hay không."
},
{
"id": 47,
"subject": "it",
"question": "Trong bài toán dò đường đi, nếu chúng ta muốn tìm lời giải tốn ít xăng nhất (có chi phí trọng số khác nhau cho mỗi đoạn đường), thuật toán tìm kiếm mù nào là TỐT NHẤT?",
"options": {
"A": "Breadth-First Search (BFS)",
"B": "Depth-First Search (DFS)",
"C": "Uniform-Cost Search (UCS)",
"D": "Depth-Limited Search (DLS)"
},
"correctOption": "C",
"explanation": "UCS được thiết kế đặc biệt để mở rộng nút theo chi phí tích lũy nhỏ nhất $g(n)$, giúp luôn tìm thấy đường đi có tổng chi phí tối ưu."
},
{
"id": 48,
"subject": "it",
"question": "Tác tử học máy (Learning Agent) sử dụng 'Problem Generator' (Bộ sản sinh vấn đề) để làm gì?",
"options": {
"A": "Tạo ra lỗi để hệ thống bị treo",
"B": "Đề xuất các hành động mới để thu thập kinh nghiệm (khám phá) thay vì chỉ làm những việc an toàn đã biết",
"C": "Chấm điểm hành động của Performance Element",
"D": "Dịch các lệnh từ con người sang ngôn ngữ máy"
},
"correctOption": "B",
"explanation": "Problem Generator đề xuất các hành động dẫn dắt tác tử thử nghiệm môi trường theo cách mới, giúp tìm ra các kinh nghiệm tối ưu hơn."
},
{
"id": 49,
"subject": "it",
"question": "Khi hai tác tử hoạt động cạnh tranh (như chơi cờ), mỗi tác tử cần phải tính toán điều gì?",
"options": {
"A": "Cách để giúp tác tử kia thắng",
"B": "Tự ngắt điện bản thân",
"C": "Dự đoán kế hoạch của đối thủ và ảnh hưởng của nó đến kế hoạch của mình",
"D": "Chia sẻ không gian bộ nhớ chung"
},
"correctOption": "C",
"explanation": "Trong môi trường cạnh tranh, mỗi tác tử phải dự đoán các hành động hợp lý của tác tử đối địch và tính toán hành động tối ưu để phản kháng lại."
},
{
"id": 50,
"subject": "it",
"question": "Biến 'closed' trong quá trình duyệt đồ thị (Graph Search) có tác dụng gì?",
"options": {
"A": "Lưu trữ cấu trúc của đích đến",
"B": "Lưu trữ các nút/trạng thái đã được duyệt (đã xét) để tránh duyệt lại tạo chu trình",
"C": "Lưu trữ giới hạn độ sâu lớn nhất $l$",
"D": "Chứa kết quả hàm Heuristic của các nút"
},
"correctOption": "B",
"explanation": "Tập hợp closed dùng để ghi nhớ những trạng thái đã được mở rộng, qua đó giải quyết vấn đề vòng lặp gây lặp vô hạn của các đồ thị."
}
];