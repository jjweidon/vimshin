export const code = `import java.util.*;

/**
 * 도서 정보를 담는 클래스
 */
class Book {
    private int id;
    private String title;
    private String author;
    private double price;
    private int stock;
    
    public Book(int id, String title, String author, double price, int stock) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
        this.stock = stock;
    }
    
    public int getId() { return id; }
    public String getTitle() { return title; }
    public String getAuthor() { return author; }
    public double getPrice() { return price; }
    public int getStock() { return stock; }
    public void setStock(int stock) { this.stock = stock; }
    
    public void display() {
        System.out.println("도서 ID: " + id);
        System.out.println("제목: " + title);
        System.out.println("저자: " + author);
        System.out.printf("가격: %.2f원%n", price);
        System.out.println("재고: " + stock + "권");
    }
}

/**
 * 도서 관리 클래스
 */
class BookManager {
    private List<Book> books;
    
    public BookManager() {
        this.books = new ArrayList<>();
    }
    
    public void addBook(Book book) {
        books.add(book);
        System.out.println("도서 '" + book.getTitle() + "'이(가) 추가되었습니다.");
    }
    
    public Book findBookById(int id) {
        return books.stream()
                .filter(b -> b.getId() == id)
                .findFirst()
                .orElse(null);
    }
    
    public Book findBookByTitle(String title) {
        return books.stream()
                .filter(b -> b.getTitle().equals(title))
                .findFirst()
                .orElse(null);
    }
    
    public boolean updateStock(int id, int quantity) {
        Book book = findBookById(id);
        if (book == null) {
            System.out.println("오류: 도서를 찾을 수 없습니다.");
            return false;
        }
        
        int newStock = book.getStock() + quantity;
        if (newStock < 0) {
            System.out.println("오류: 재고가 부족합니다. (현재 재고: " 
                             + book.getStock() + ")");
            return false;
        }
        
        book.setStock(newStock);
        System.out.println("도서 '" + book.getTitle() 
                         + "'의 재고가 " + newStock + "권으로 업데이트되었습니다.");
        return true;
    }
    
    public void displayAll() {
        if (books.isEmpty()) {
            System.out.println("등록된 도서가 없습니다.");
            return;
        }
        
        System.out.println("\\n=== 전체 도서 목록 ===");
        for (int i = 0; i < books.size(); i++) {
            System.out.println("\\n[도서 " + (i + 1) + "]");
            books.get(i).display();
        }
    }
    
    public int getTotalStock() {
        return books.stream()
                .mapToInt(Book::getStock)
                .sum();
    }
    
    public double getTotalValue() {
        return books.stream()
                .mapToDouble(b -> b.getPrice() * b.getStock())
                .sum();
    }
}

/**
 * 메인 클래스
 */
public class Main {
    public static void main(String[] args) {
        BookManager manager = new BookManager();
        
        // 초기 도서 데이터 추가
        manager.addBook(new Book(1, "자바 프로그래밍", "김개발", 25000.0, 10));
        manager.addBook(new Book(2, "자료구조와 알고리즘", "이알고", 32000.0, 5));
        manager.addBook(new Book(3, "운영체제", "박시스템", 28000.0, 8));
        manager.addBook(new Book(4, "데이터베이스", "최DB", 30000.0, 12));
        manager.addBook(new Book(5, "네트워크", "정네트", 35000.0, 6));
        
        System.out.println();
        
        // 전체 도서 목록 출력
        manager.displayAll();
        
        // 도서 검색 테스트
        System.out.println("\\n=== 도서 검색 테스트 ===");
        Book foundBook = manager.findBookByTitle("자바 프로그래밍");
        if (foundBook != null) {
            System.out.println("\\n검색 결과:");
            foundBook.display();
        }
        
        // 재고 업데이트 테스트
        System.out.println("\\n=== 재고 업데이트 ===");
        manager.updateStock(1, -3);  // 3권 판매
        manager.updateStock(2, 5);  // 5권 입고
        
        // 통계 정보
        System.out.println("\\n=== 통계 정보 ===");
        System.out.println("총 재고 수: " + manager.getTotalStock() + "권");
        System.out.printf("총 재고 가치: %.2f원%n", manager.getTotalValue());
    }
}`;

