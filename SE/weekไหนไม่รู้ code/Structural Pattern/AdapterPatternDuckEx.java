// AdapterPatternDuckEx.java

public class AdapterPatternDuckEx {

    // Duck Interface
    public interface Duck {
        void quack();
        void fly();
    }

    // Turkey Interface
    public interface Turkey {
        void gobble();
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

    // WildTurkey Class
    public static class WildTurkey implements Turkey {
        public void gobble() {
            System.out.println("Gobble gobble");
        }

        public void fly() {
            System.out.println("I'm flying a short distance");
        }
    }

    // TurkeyAdapter Class
    public static class TurkeyAdapter implements Duck {
        Turkey turkey;

        public TurkeyAdapter(Turkey turkey) {
            this.turkey = turkey;
        }

        @Override
        public void quack() {
            turkey.gobble(); // Adapt gobble() to quack()
        }

        @Override
        public void fly() {
            // Turkeys fly short distances, so call fly() multiple times.
            for (int i = 0; i < 5; i++) {
                turkey.fly();
            }
        }
    }

    // DuckTestDrive Class
    public static void main(String[] args) {

        Duck d = new MallardDuck();
        d.quack();
        d.fly();

        Turkey turkey = new WildTurkey();
        d = new TurkeyAdapter(turkey);

        // Test the adapted Turkey's behavior as a Duck
        d.quack(); // Should print "Gobble gobble"
        d.fly();   // Should print "I'm flying a short distance" 5 times
    }
}