export const code = `#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// 학생 정보 구조체
struct Student {
    int id;
    char name[50];
    float score;
};

// 학생 정보 출력 함수
void printStudent(struct Student *student) {
    printf("학생 ID: %d\\n", student->id);
    printf("이름: %s\\n", student->name);
    printf("점수: %.2f\\n", student->score);
}

// 점수 비교 함수 (qsort용)
int compareScores(const void *a, const void *b) {
    struct Student *studentA = (struct Student *)a;
    struct Student *studentB = (struct Student *)b;
    
    if (studentA->score < studentB->score) return 1;
    if (studentA->score > studentB->score) return -1;
    return 0;
}

// 배열에서 최고 점수 찾기
float findMaxScore(struct Student students[], int count) {
    float maxScore = students[0].score;
    for (int i = 1; i < count; i++) {
        if (students[i].score > maxScore) {
            maxScore = students[i].score;
        }
    }
    return maxScore;
}

// 배열에서 평균 점수 계산
float calculateAverage(struct Student students[], int count) {
    float sum = 0.0;
    for (int i = 0; i < count; i++) {
        sum += students[i].score;
    }
    return sum / count;
}

int main() {
    // 학생 데이터 배열
    struct Student students[5] = {
        {1, "김철수", 85.5},
        {2, "이영희", 92.0},
        {3, "박민수", 78.5},
        {4, "최지영", 95.5},
        {5, "정동욱", 88.0}
    };
    
    int studentCount = 5;
    
    printf("=== 학생 성적 관리 프로그램 ===\\n\\n");
    
    // 모든 학생 정보 출력
    printf("전체 학생 정보:\\n");
    for (int i = 0; i < studentCount; i++) {
        printf("\\n[학생 %d]\\n", i + 1);
        printStudent(&students[i]);
    }
    
    // 점수순 정렬
    qsort(students, studentCount, sizeof(struct Student), compareScores);
    
    printf("\\n=== 점수순 정렬 결과 ===\\n");
    for (int i = 0; i < studentCount; i++) {
        printf("%d위: %s (%.2f점)\\n", 
               i + 1, students[i].name, students[i].score);
    }
    
    // 통계 정보
    float maxScore = findMaxScore(students, studentCount);
    float avgScore = calculateAverage(students, studentCount);
    
    printf("\\n=== 통계 정보 ===\\n");
    printf("최고 점수: %.2f\\n", maxScore);
    printf("평균 점수: %.2f\\n", avgScore);
    
    return 0;
}`;

