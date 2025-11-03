export const code = `#!/usr/bin/env python3
# -*- coding: utf-8 -*-

from typing import List
from dataclasses import dataclass

@dataclass
class Student:
    """학생 정보를 담는 데이터 클래스"""
    id: int
    name: str
    score: float
    
    def display(self) -> None:
        """학생 정보를 출력합니다"""
        print(f"학생 ID: {self.id}")
        print(f"이름: {self.name}")
        print(f"점수: {self.score:.2f}")


class GradeManager:
    """성적 관리 클래스"""
    
    def __init__(self):
        self.students: List[Student] = []
    
    def add_student(self, student: Student) -> None:
        """학생을 추가합니다"""
        self.students.append(student)
    
    def display_all(self) -> None:
        """모든 학생 정보를 출력합니다"""
        print("=== 전체 학생 정보 ===")
        for idx, student in enumerate(self.students, 1):
            print(f"\\n[학생 {idx}]")
            student.display()
    
    def sort_by_score(self) -> None:
        """점수순으로 정렬합니다 (내림차순)"""
        self.students.sort(key=lambda s: s.score, reverse=True)
    
    def get_max_score(self) -> float:
        """최고 점수를 반환합니다"""
        if not self.students:
            return 0.0
        return max(student.score for student in self.students)
    
    def get_average(self) -> float:
        """평균 점수를 계산합니다"""
        if not self.students:
            return 0.0
        total = sum(student.score for student in self.students)
        return total / len(self.students)
    
    def display_ranking(self) -> None:
        """순위를 출력합니다"""
        print("\\n=== 점수순 정렬 결과 ===")
        for rank, student in enumerate(self.students, 1):
            print(f"{rank}위: {student.name} ({student.score:.2f}점)")


def main():
    """메인 함수"""
    manager = GradeManager()
    
    # 학생 데이터 추가
    students_data = [
        (1, "김철수", 85.5),
        (2, "이영희", 92.0),
        (3, "박민수", 78.5),
        (4, "최지영", 95.5),
        (5, "정동욱", 88.0)
    ]
    
    for student_id, name, score in students_data:
        manager.add_student(Student(student_id, name, score))
    
    print("=== 학생 성적 관리 프로그램 ===\\n")
    
    # 전체 학생 정보 출력
    manager.display_all()
    
    # 점수순 정렬
    manager.sort_by_score()
    manager.display_ranking()
    
    # 통계 정보
    print("\\n=== 통계 정보 ===")
    print(f"최고 점수: {manager.get_max_score():.2f}")
    print(f"평균 점수: {manager.get_average():.2f}")


if __name__ == "__main__":
    main()`;

