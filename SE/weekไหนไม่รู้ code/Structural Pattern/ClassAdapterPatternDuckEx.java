// ClassAdapterPatternDuckEx.java

public class ClassAdapterPatternDuckEx {

    // Duck Interface
    public interface Duck {
        void quack();
        void fly();
    }

    // MallardDuck Class
    public static class MallardDuck implements Duck {
        public void quack() {
            System.out.println("Quack");
        }

        public void fly() {
            System.out.println("I'm flying");
        }
    }

    // Turkey Class (we'll adapt this to Duck)
    public static class WildTurkey {
        public void gobble() {
            System.out.println("Gobble gobble");
        }

        public void fly() {
            System.out.println("I'm flying a short distance");
        }
    }

    // TurkeyAdapter Class (extends WildTurkey and implements Duck)
    public static class TurkeyAdapter extends WildTurkey implements Duck {

        @Override
        public void quack() {
            // Adapt Turkey's gobble() to Duck's quack()
            this.gobble();
        }

        @Override
        public void fly() {
            // Turkey flies short distances, so we call its fly() multiple times
            for (int i = 0; i < 5; i++) {
                super.fly();
            }
        }
    }

    // DuckTestDrive Class
    public static void main(String[] args) {
        Duck d = new MallardDuck();
        d.quack();
        d.fly();

        d = new TurkeyAdapter();
        // Test the adapted Turkey's behavior as a Duck
        d.quack(); // Should print "Gobble gobble"
        d.fly();   // Should print "I'm flying a short distance" 5 times
    }
}