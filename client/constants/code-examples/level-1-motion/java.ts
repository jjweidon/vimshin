export const code = `import java.util.*;

/**
 * 학생 정보를 담는 클래스
 */
class Student {
    private int id;
    private String name;
    private double score;
    
    public Student(int id, String name, double score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
    
    public int getId() {
        return id;
    }
    
    public String getName() {
        return name;
    }
    
    public double getScore() {
        return score;
    }
    
    public void display() {
        System.out.println("학생 ID: " + id);
        System.out.println("이름: " + name);
        System.out.printf("점수: %.2f%n", score);
    }
}

/**
 * 성적 관리 클래스
 */
class GradeManager {
    private List<Student> students;
    
    public GradeManager() {
        this.students = new ArrayList<>();
    }
    
    public void addStudent(Student student) {
        students.add(student);
    }
    
    public void displayAll() {
        System.out.println("=== 전체 학생 정보 ===");
        for (int i = 0; i < students.size(); i++) {
            System.out.println("\\n[학생 " + (i + 1) + "]");
            students.get(i).display();
        }
    }
    
    public void sortByScore() {
        students.sort((a, b) -> Double.compare(b.getScore(), a.getScore()));
    }
    
    public double getMaxScore() {
        if (students.isEmpty()) {
            return 0.0;
        }
        return students.stream()
                .mapToDouble(Student::getScore)
                .max()
                .orElse(0.0);
    }
    
    public double getAverage() {
        if (students.isEmpty()) {
            return 0.0;
        }
        return students.stream()
                .mapToDouble(Student::getScore)
                .average()
                .orElse(0.0);
    }
    
    public void displayRanking() {
        System.out.println("\\n=== 점수순 정렬 결과 ===");
        for (int i = 0; i < students.size(); i++) {
            Student student = students.get(i);
            System.out.printf("%d위: %s (%.2f점)%n", 
                            i + 1, student.getName(), student.getScore());
        }
    }
}

/**
 * 메인 클래스
 */
public class Main {
    public static void main(String[] args) {
        GradeManager manager = new GradeManager();
        
        // 학생 데이터 추가
        manager.addStudent(new Student(1, "김철수", 85.5));
        manager.addStudent(new Student(2, "이영희", 92.0));
        manager.addStudent(new Student(3, "박민수", 78.5));
        manager.addStudent(new Student(4, "최지영", 95.5));
        manager.addStudent(new Student(5, "정동욱", 88.0));
        
        System.out.println("=== 학생 성적 관리 프로그램 ===\\n");
        
        // 전체 학생 정보 출력
        manager.displayAll();
        
        // 점수순 정렬
        manager.sortByScore();
        manager.displayRanking();
        
        // 통계 정보
        System.out.println("\\n=== 통계 정보 ===");
        System.out.printf("최고 점수: %.2f%n", manager.getMaxScore());
        System.out.printf("평균 점수: %.2f%n", manager.getAverage());
    }
}`;

