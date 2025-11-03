export const code = `/**
 * 학생 정보를 담는 클래스
 */
class Student {
    /**
     * @param {number} id - 학생 ID
     * @param {string} name - 학생 이름
     * @param {number} score - 점수
     */
    constructor(id, name, score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
    
    /**
     * 학생 정보를 출력합니다
     */
    display() {
        console.log(\`학생 ID: \${this.id}\`);
        console.log(\`이름: \${this.name}\`);
        console.log(\`점수: \${this.score.toFixed(2)}\`);
    }
}

/**
 * 성적 관리 클래스
 */
class GradeManager {
    constructor() {
        /** @type {Student[]} */
        this.students = [];
    }
    
    /**
     * 학생을 추가합니다
     * @param {Student} student - 추가할 학생 객체
     */
    addStudent(student) {
        this.students.push(student);
    }
    
    /**
     * 모든 학생 정보를 출력합니다
     */
    displayAll() {
        console.log("=== 전체 학생 정보 ===");
        this.students.forEach((student, index) => {
            console.log(\`\\n[학생 \${index + 1}]\`);
            student.display();
        });
    }
    
    /**
     * 점수순으로 정렬합니다 (내림차순)
     */
    sortByScore() {
        this.students.sort((a, b) => b.score - a.score);
    }
    
    /**
     * 최고 점수를 반환합니다
     * @returns {number} 최고 점수
     */
    getMaxScore() {
        if (this.students.length === 0) {
            return 0.0;
        }
        return Math.max(...this.students.map(s => s.score));
    }
    
    /**
     * 평균 점수를 계산합니다
     * @returns {number} 평균 점수
     */
    getAverage() {
        if (this.students.length === 0) {
            return 0.0;
        }
        const sum = this.students.reduce((acc, student) => acc + student.score, 0);
        return sum / this.students.length;
    }
    
    /**
     * 순위를 출력합니다
     */
    displayRanking() {
        console.log("\\n=== 점수순 정렬 결과 ===");
        this.students.forEach((student, index) => {
            console.log(\`\${index + 1}위: \${student.name} (\${student.score.toFixed(2)}점)\`);
        });
    }
}

/**
 * 메인 함수
 */
function main() {
    const manager = new GradeManager();
    
    // 학생 데이터 추가
    const studentsData = [
        [1, "김철수", 85.5],
        [2, "이영희", 92.0],
        [3, "박민수", 78.5],
        [4, "최지영", 95.5],
        [5, "정동욱", 88.0]
    ];
    
    studentsData.forEach(([id, name, score]) => {
        manager.addStudent(new Student(id, name, score));
    });
    
    console.log("=== 학생 성적 관리 프로그램 ===\\n");
    
    // 전체 학생 정보 출력
    manager.displayAll();
    
    // 점수순 정렬
    manager.sortByScore();
    manager.displayRanking();
    
    // 통계 정보
    console.log("\\n=== 통계 정보 ===");
    console.log(\`최고 점수: \${manager.getMaxScore().toFixed(2)}\`);
    console.log(\`평균 점수: \${manager.getAverage().toFixed(2)}\`);
}

// 프로그램 실행
main();`;

