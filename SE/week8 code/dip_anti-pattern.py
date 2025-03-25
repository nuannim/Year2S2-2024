# High-level module (Business Logic)
class LightSwitch:
    def turn_on(self):
        bulb = LightBulb()
        bulb.turn_on()

# Low-level module (Details)
class LightBulb:
    def turn_on(self):
        print("Light bulb turned on")

# Client code
switch = LightSwitch()
switch.turn_on()
