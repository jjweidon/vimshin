export const code = `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 도서 정보 구조체
struct Book {
    int id;
    char title[100];
    char author[50];
    float price;
    int stock;
};

// 도서 정보 출력 함수
void printBook(struct Book *book) {
    printf("도서 ID: %d\\n", book->id);
    printf("제목: %s\\n", book->title);
    printf("저자: %s\\n", book->author);
    printf("가격: %.2f원\\n", book->price);
    printf("재고: %d권\\n", book->stock);
}

// 도서 추가 함수
void addBook(struct Book books[], int *count, 
             int id, const char *title, const char *author, 
             float price, int stock) {
    if (*count >= 100) {
        printf("오류: 도서 목록이 가득 찼습니다.\\n");
        return;
    }
    
    struct Book newBook;
    newBook.id = id;
    strcpy(newBook.title, title);
    strcpy(newBook.author, author);
    newBook.price = price;
    newBook.stock = stock;
    
    books[*count] = newBook;
    (*count)++;
    printf("도서 '%s'이(가) 추가되었습니다.\\n", title);
}

// 도서 검색 함수
struct Book* findBookById(struct Book books[], int count, int id) {
    for (int i = 0; i < count; i++) {
        if (books[i].id == id) {
            return &books[i];
        }
    }
    return NULL;
}

// 도서 검색 (제목으로)
struct Book* findBookByTitle(struct Book books[], int count, const char *title) {
    for (int i = 0; i < count; i++) {
        if (strcmp(books[i].title, title) == 0) {
            return &books[i];
        }
    }
    return NULL;
}

// 재고 업데이트 함수
int updateStock(struct Book books[], int count, int id, int quantity) {
    struct Book *book = findBookById(books, count, id);
    if (book == NULL) {
        printf("오류: 도서를 찾을 수 없습니다.\\n");
        return 0;
    }
    
    if (book->stock + quantity < 0) {
        printf("오류: 재고가 부족합니다. (현재 재고: %d)\\n", book->stock);
        return 0;
    }
    
    book->stock += quantity;
    printf("도서 '%s'의 재고가 %d권으로 업데이트되었습니다.\\n", 
           book->title, book->stock);
    return 1;
}

// 전체 도서 목록 출력
void displayAllBooks(struct Book books[], int count) {
    if (count == 0) {
        printf("등록된 도서가 없습니다.\\n");
        return;
    }
    
    printf("\\n=== 전체 도서 목록 ===\\n");
    for (int i = 0; i < count; i++) {
        printf("\\n[도서 %d]\\n", i + 1);
        printBook(&books[i]);
    }
}

// 총 재고 수 계산
int getTotalStock(struct Book books[], int count) {
    int total = 0;
    for (int i = 0; i < count; i++) {
        total += books[i].stock;
    }
    return total;
}

// 총 재고 가치 계산
float getTotalValue(struct Book books[], int count) {
    float total = 0.0;
    for (int i = 0; i < count; i++) {
        total += books[i].price * books[i].stock;
    }
    return total;
}

int main() {
    struct Book books[100];
    int bookCount = 0;
    
    printf("=== 도서 관리 시스템 ===\\n\\n");
    
    // 초기 도서 데이터 추가
    addBook(books, &bookCount, 1, "C 프로그래밍", "김개발", 25000.0, 10);
    addBook(books, &bookCount, 2, "자료구조와 알고리즘", "이알고", 32000.0, 5);
    addBook(books, &bookCount, 3, "운영체제", "박시스템", 28000.0, 8);
    addBook(books, &bookCount, 4, "데이터베이스", "최DB", 30000.0, 12);
    addBook(books, &bookCount, 5, "네트워크", "정네트", 35000.0, 6);
    
    printf("\\n");
    
    // 전체 도서 목록 출력
    displayAllBooks(books, bookCount);
    
    // 도서 검색 테스트
    printf("\\n=== 도서 검색 테스트 ===\\n");
    struct Book *foundBook = findBookByTitle(books, bookCount, "C 프로그래밍");
    if (foundBook) {
        printf("\\n검색 결과:\\n");
        printBook(foundBook);
    }
    
    // 재고 업데이트 테스트
    printf("\\n=== 재고 업데이트 ===\\n");
    updateStock(books, bookCount, 1, -3);  // 3권 판매
    updateStock(books, bookCount, 2, 5);    // 5권 입고
    
    // 통계 정보
    printf("\\n=== 통계 정보 ===\\n");
    printf("총 재고 수: %d권\\n", getTotalStock(books, bookCount));
    printf("총 재고 가치: %.2f원\\n", getTotalValue(books, bookCount));
    
    return 0;
}`;

