import java.awt.*;
import java.awt.event.TextEvent;
import java.awt.event.TextListener;

public class TextObserverExample {
    public static void main(String[] args) {
        Frame frame = new Frame("TextComponent");
        TextField textField = new TextField();

        textField.addTextListener(new TextListener() {
            @Override
            public void textValueChanged(TextEvent e) {
                System.out.println("Listener 1: Text changed to: " + textField.getText());
            }
        });

        textField.addTextListener(new TextListener() {
            @Override
            public void textValueChanged(TextEvent e) {
                System.out.println("Listener 2: Text changed to: " + textField.getText());
            }
        });

        frame.add(textField, BorderLayout.CENTER);
        frame.setSize(300, 100);
        frame.setVisible(true);
    }
}