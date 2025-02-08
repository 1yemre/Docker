import java.util.Scanner;

public class Helloworld {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Adınızı girin:");
        String name = scanner.nextLine();
        
        System.out.println("Merhaba, " + name + "!");
    }
}
