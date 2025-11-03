export const code = `#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <iomanip>

// 학생 클래스
class Student {
private:
    int id;
    std::string name;
    double score;

public:
    Student(int id, const std::string& name, double score)
        : id(id), name(name), score(score) {}
    
    int getId() const { return id; }
    std::string getName() const { return name; }
    double getScore() const { return score; }
    
    void display() const {
        std::cout << "학생 ID: " << id << std::endl;
        std::cout << "이름: " << name << std::endl;
        std::cout << "점수: " << std::fixed << std::setprecision(2) 
                  << score << std::endl;
    }
};

// 성적 관리 클래스
class GradeManager {
private:
    std::vector<Student> students;

public:
    void addStudent(const Student& student) {
        students.push_back(student);
    }
    
    void displayAll() const {
        std::cout << "=== 전체 학생 정보 ===" << std::endl;
        for (size_t i = 0; i < students.size(); i++) {
            std::cout << "\\n[학생 " << (i + 1) << "]" << std::endl;
            students[i].display();
        }
    }
    
    void sortByScore() {
        std::sort(students.begin(), students.end(),
            [](const Student& a, const Student& b) {
                return a.getScore() > b.getScore();
            });
    }
    
    double getMaxScore() const {
        if (students.empty()) return 0.0;
        double max = students[0].getScore();
        for (const auto& student : students) {
            if (student.getScore() > max) {
                max = student.getScore();
            }
        }
        return max;
    }
    
    double getAverage() const {
        if (students.empty()) return 0.0;
        double sum = 0.0;
        for (const auto& student : students) {
            sum += student.getScore();
        }
        return sum / students.size();
    }
    
    void displayRanking() const {
        std::cout << "\\n=== 점수순 정렬 결과 ===" << std::endl;
        for (size_t i = 0; i < students.size(); i++) {
            std::cout << (i + 1) << "위: " << students[i].getName()
                      << " (" << std::fixed << std::setprecision(2)
                      << students[i].getScore() << "점)" << std::endl;
        }
    }
};

int main() {
    GradeManager manager;
    
    // 학생 데이터 추가
    manager.addStudent(Student(1, "김철수", 85.5));
    manager.addStudent(Student(2, "이영희", 92.0));
    manager.addStudent(Student(3, "박민수", 78.5));
    manager.addStudent(Student(4, "최지영", 95.5));
    manager.addStudent(Student(5, "정동욱", 88.0));
    
    std::cout << "=== 학생 성적 관리 프로그램 ===" << std::endl << std::endl;
    
    // 전체 학생 정보 출력
    manager.displayAll();
    
    // 점수순 정렬
    manager.sortByScore();
    manager.displayRanking();
    
    // 통계 정보
    std::cout << "\\n=== 통계 정보 ===" << std::endl;
    std::cout << "최고 점수: " << std::fixed << std::setprecision(2)
              << manager.getMaxScore() << std::endl;
    std::cout << "평균 점수: " << manager.getAverage() << std::endl;
    
    return 0;
}`;

