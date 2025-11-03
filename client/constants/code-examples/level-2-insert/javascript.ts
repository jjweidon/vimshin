export const code = `/**
 * 도서 정보를 담는 클래스
 */
class Book {
    /**
     * @param {number} id - 도서 ID
     * @param {string} title - 도서 제목
     * @param {string} author - 저자
     * @param {number} price - 가격
     * @param {number} stock - 재고 수
     */
    constructor(id, title, author, price, stock) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.stock = stock;
    }
    
    /**
     * 도서 정보를 출력합니다
     */
    display() {
        console.log(\`도서 ID: \${this.id}\`);
        console.log(\`제목: \${this.title}\`);
        console.log(\`저자: \${this.author}\`);
        console.log(\`가격: \${this.price.toFixed(2)}원\`);
        console.log(\`재고: \${this.stock}권\`);
    }
}

/**
 * 도서 관리 클래스
 */
class BookManager {
    constructor() {
        /** @type {Book[]} */
        this.books = [];
    }
    
    /**
     * 도서를 추가합니다
     * @param {Book} book - 추가할 도서 객체
     */
    addBook(book) {
        this.books.push(book);
        console.log(\`도서 '\${book.title}'이(가) 추가되었습니다.\`);
    }
    
    /**
     * ID로 도서를 찾습니다
     * @param {number} id - 도서 ID
     * @returns {Book|undefined} 찾은 도서 또는 undefined
     */
    findBookById(id) {
        return this.books.find(book => book.id === id);
    }
    
    /**
     * 제목으로 도서를 찾습니다
     * @param {string} title - 도서 제목
     * @returns {Book|undefined} 찾은 도서 또는 undefined
     */
    findBookByTitle(title) {
        return this.books.find(book => book.title === title);
    }
    
    /**
     * 재고를 업데이트합니다
     * @param {number} id - 도서 ID
     * @param {number} quantity - 변경 수량 (음수면 판매, 양수면 입고)
     * @returns {boolean} 업데이트 성공 여부
     */
    updateStock(id, quantity) {
        const book = this.findBookById(id);
        if (!book) {
            console.log("오류: 도서를 찾을 수 없습니다.");
            return false;
        }
        
        const newStock = book.stock + quantity;
        if (newStock < 0) {
            console.log(\`오류: 재고가 부족합니다. (현재 재고: \${book.stock})\`);
            return false;
        }
        
        book.stock = newStock;
        console.log(\`도서 '\${book.title}'의 재고가 \${newStock}권으로 업데이트되었습니다.\`);
        return true;
    }
    
    /**
     * 모든 도서 목록을 출력합니다
     */
    displayAll() {
        if (this.books.length === 0) {
            console.log("등록된 도서가 없습니다.");
            return;
        }
        
        console.log("\\n=== 전체 도서 목록 ===");
        this.books.forEach((book, index) => {
            console.log(\`\\n[도서 \${index + 1}]\`);
            book.display();
        });
    }
    
    /**
     * 총 재고 수를 반환합니다
     * @returns {number} 총 재고 수
     */
    getTotalStock() {
        return this.books.reduce((sum, book) => sum + book.stock, 0);
    }
    
    /**
     * 총 재고 가치를 계산합니다
     * @returns {number} 총 재고 가치
     */
    getTotalValue() {
        return this.books.reduce((sum, book) => sum + (book.price * book.stock), 0);
    }
}

/**
 * 메인 함수
 */
function main() {
    const manager = new BookManager();
    
    // 초기 도서 데이터 추가
    const booksData = [
        [1, "자바스크립트 프로그래밍", "김개발", 25000.0, 10],
        [2, "자료구조와 알고리즘", "이알고", 32000.0, 5],
        [3, "운영체제", "박시스템", 28000.0, 8],
        [4, "데이터베이스", "최DB", 30000.0, 12],
        [5, "네트워크", "정네트", 35000.0, 6]
    ];
    
    booksData.forEach(([id, title, author, price, stock]) => {
        manager.addBook(new Book(id, title, author, price, stock));
    });
    
    console.log();
    
    // 전체 도서 목록 출력
    manager.displayAll();
    
    // 도서 검색 테스트
    console.log("\\n=== 도서 검색 테스트 ===");
    const foundBook = manager.findBookByTitle("자바스크립트 프로그래밍");
    if (foundBook) {
        console.log("\\n검색 결과:");
        foundBook.display();
    }
    
    // 재고 업데이트 테스트
    console.log("\\n=== 재고 업데이트 ===");
    manager.updateStock(1, -3);  // 3권 판매
    manager.updateStock(2, 5);   // 5권 입고
    
    // 통계 정보
    console.log("\\n=== 통계 정보 ===");
    console.log(\`총 재고 수: \${manager.getTotalStock()}권\`);
    console.log(\`총 재고 가치: \${manager.getTotalValue().toFixed(2)}원\`);
}

// 프로그램 실행
main();`;

