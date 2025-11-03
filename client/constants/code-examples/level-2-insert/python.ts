export const code = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from typing import List, Optional
from dataclasses import dataclass

@dataclass
class Book:
    """도서 정보를 담는 데이터 클래스"""
    id: int
    title: str
    author: str
    price: float
    stock: int
    
    def display(self) -> None:
        """도서 정보를 출력합니다"""
        print(f"도서 ID: {self.id}")
        print(f"제목: {self.title}")
        print(f"저자: {self.author}")
        print(f"가격: {self.price:.2f}원")
        print(f"재고: {self.stock}권")


class BookManager:
    """도서 관리 클래스"""
    
    def __init__(self):
        self.books: List[Book] = []
    
    def add_book(self, book: Book) -> None:
        """도서를 추가합니다"""
        self.books.append(book)
        print(f"도서 '{book.title}'이(가) 추가되었습니다.")
    
    def find_by_id(self, book_id: int) -> Optional[Book]:
        """ID로 도서를 찾습니다"""
        for book in self.books:
            if book.id == book_id:
                return book
        return None
    
    def find_by_title(self, title: str) -> Optional[Book]:
        """제목으로 도서를 찾습니다"""
        for book in self.books:
            if book.title == title:
                return book
        return None
    
    def update_stock(self, book_id: int, quantity: int) -> bool:
        """재고를 업데이트합니다
        
        Args:
            book_id: 도서 ID
            quantity: 변경 수량 (음수면 판매, 양수면 입고)
        
        Returns:
            업데이트 성공 여부
        """
        book = self.find_by_id(book_id)
        if book is None:
            print("오류: 도서를 찾을 수 없습니다.")
            return False
        
        new_stock = book.stock + quantity
        if new_stock < 0:
            print(f"오류: 재고가 부족합니다. (현재 재고: {book.stock})")
            return False
        
        book.stock = new_stock
        print(f"도서 '{book.title}'의 재고가 {new_stock}권으로 업데이트되었습니다.")
        return True
    
    def display_all(self) -> None:
        """모든 도서 목록을 출력합니다"""
        if not self.books:
            print("등록된 도서가 없습니다.")
            return
        
        print("\\n=== 전체 도서 목록 ===")
        for idx, book in enumerate(self.books, 1):
            print(f"\\n[도서 {idx}]")
            book.display()
    
    def get_total_stock(self) -> int:
        """총 재고 수를 반환합니다"""
        return sum(book.stock for book in self.books)
    
    def get_total_value(self) -> float:
        """총 재고 가치를 계산합니다"""
        return sum(book.price * book.stock for book in self.books)


def main():
    """메인 함수"""
    manager = BookManager()
    
    # 초기 도서 데이터 추가
    books_data = [
        (1, "파이썬 프로그래밍", "김개발", 25000.0, 10),
        (2, "자료구조와 알고리즘", "이알고", 32000.0, 5),
        (3, "운영체제", "박시스템", 28000.0, 8),
        (4, "데이터베이스", "최DB", 30000.0, 12),
        (5, "네트워크", "정네트", 35000.0, 6)
    ]
    
    for book_id, title, author, price, stock in books_data:
        manager.add_book(Book(book_id, title, author, price, stock))
    
    print()
    
    # 전체 도서 목록 출력
    manager.display_all()
    
    # 도서 검색 테스트
    print("\\n=== 도서 검색 테스트 ===")
    found_book = manager.find_by_title("파이썬 프로그래밍")
    if found_book:
        print("\\n검색 결과:")
        found_book.display()
    
    # 재고 업데이트 테스트
    print("\\n=== 재고 업데이트 ===")
    manager.update_stock(1, -3)  # 3권 판매
    manager.update_stock(2, 5)   # 5권 입고
    
    # 통계 정보
    print("\\n=== 통계 정보 ===")
    print(f"총 재고 수: {manager.get_total_stock()}권")
    print(f"총 재고 가치: {manager.get_total_value():.2f}원")


if __name__ == "__main__":
    main()`;

