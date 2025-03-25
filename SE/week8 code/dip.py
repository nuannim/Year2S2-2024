from abc import ABC, abstractmethod

# Abstraction (Interface)
class Switchable(ABC):
    @abstractmethod
    def turn_on(self):
        pass

# High-level module (Business Logic)
class LightSwitch:
    def __init__(self, device: Switchable):
        self.device = device

    def turn_on(self):
        self.device.turn_on()

# Low-level module (Details)
class LightBulb(Switchable):
    def turn_on(self):
        print("Light bulb turned on")

# Client code
bulb = LightBulb()
switch = LightSwitch(bulb)
switch.turn_on()
