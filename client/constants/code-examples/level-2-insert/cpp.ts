export const code = `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <iomanip>

// 도서 클래스
class Book {
private:
    int id;
    std::string title;
    std::string author;
    double price;
    int stock;

public:
    Book(int id, const std::string& title, const std::string& author, 
         double price, int stock)
        : id(id), title(title), author(author), price(price), stock(stock) {}
    
    int getId() const { return id; }
    std::string getTitle() const { return title; }
    std::string getAuthor() const { return author; }
    double getPrice() const { return price; }
    int getStock() const { return stock; }
    
    void setStock(int newStock) { stock = newStock; }
    
    void display() const {
        std::cout << "도서 ID: " << id << std::endl;
        std::cout << "제목: " << title << std::endl;
        std::cout << "저자: " << author << std::endl;
        std::cout << "가격: " << std::fixed << std::setprecision(2) 
                  << price << "원" << std::endl;
        std::cout << "재고: " << stock << "권" << std::endl;
    }
};

// 도서 관리 클래스
class BookManager {
private:
    std::vector<Book> books;

public:
    void addBook(const Book& book) {
        books.push_back(book);
        std::cout << "도서 '" << book.getTitle() 
                  << "'이(가) 추가되었습니다." << std::endl;
    }
    
    Book* findBookById(int id) {
        for (auto& book : books) {
            if (book.getId() == id) {
                return &book;
            }
        }
        return nullptr;
    }
    
    Book* findBookByTitle(const std::string& title) {
        for (auto& book : books) {
            if (book.getTitle() == title) {
                return &book;
            }
        }
        return nullptr;
    }
    
    bool updateStock(int id, int quantity) {
        Book* book = findBookById(id);
        if (book == nullptr) {
            std::cout << "오류: 도서를 찾을 수 없습니다." << std::endl;
            return false;
        }
        
        int newStock = book->getStock() + quantity;
        if (newStock < 0) {
            std::cout << "오류: 재고가 부족합니다. (현재 재고: " 
                      << book->getStock() << ")" << std::endl;
            return false;
        }
        
        book->setStock(newStock);
        std::cout << "도서 '" << book->getTitle() 
                  << "'의 재고가 " << newStock << "권으로 업데이트되었습니다." 
                  << std::endl;
        return true;
    }
    
    void displayAll() const {
        if (books.empty()) {
            std::cout << "등록된 도서가 없습니다." << std::endl;
            return;
        }
        
        std::cout << "\\n=== 전체 도서 목록 ===" << std::endl;
        for (size_t i = 0; i < books.size(); i++) {
            std::cout << "\\n[도서 " << (i + 1) << "]" << std::endl;
            books[i].display();
        }
    }
    
    int getTotalStock() const {
        int total = 0;
        for (const auto& book : books) {
            total += book.getStock();
        }
        return total;
    }
    
    double getTotalValue() const {
        double total = 0.0;
        for (const auto& book : books) {
            total += book.getPrice() * book.getStock();
        }
        return total;
    }
};

int main() {
    BookManager manager;
    
    // 초기 도서 데이터 추가
    manager.addBook(Book(1, "C++ 프로그래밍", "김개발", 25000.0, 10));
    manager.addBook(Book(2, "자료구조와 알고리즘", "이알고", 32000.0, 5));
    manager.addBook(Book(3, "운영체제", "박시스템", 28000.0, 8));
    manager.addBook(Book(4, "데이터베이스", "최DB", 30000.0, 12));
    manager.addBook(Book(5, "네트워크", "정네트", 35000.0, 6));
    
    std::cout << std::endl;
    
    // 전체 도서 목록 출력
    manager.displayAll();
    
    // 도서 검색 테스트
    std::cout << "\\n=== 도서 검색 테스트 ===" << std::endl;
    Book* foundBook = manager.findBookByTitle("C++ 프로그래밍");
    if (foundBook) {
        std::cout << "\\n검색 결과:" << std::endl;
        foundBook->display();
    }
    
    // 재고 업데이트 테스트
    std::cout << "\\n=== 재고 업데이트 ===" << std::endl;
    manager.updateStock(1, -3);  // 3권 판매
    manager.updateStock(2, 5);   // 5권 입고
    
    // 통계 정보
    std::cout << "\\n=== 통계 정보 ===" << std::endl;
    std::cout << "총 재고 수: " << manager.getTotalStock() << "권" << std::endl;
    std::cout << "총 재고 가치: " << std::fixed << std::setprecision(2)
              << manager.getTotalValue() << "원" << std::endl;
    
    return 0;
}`;

