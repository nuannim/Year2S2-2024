from enum import Enum
from pprint import pprint

class Color(Enum):
    RED = 1
    GREEN = 2
    BLUE = 3

class Size(Enum):
    SMALL = 1
    MEDIUM = 2
    LARGE = 3


class Product:
    def __init__(self, name, color, size, price):
        self.name = name
        self.color = color
        self.size = size
        self.price = price
        
    def __str__(self):
        return ("Object: " + self.name + " | " + str(self.color) + " | " + str(self.size) + " | " + str(self.price))

# OCP = open for extension, closed for modification
#---------------More flexible for modification, and comply with OCP----------------

class Specification:
    def is_satisfied(self, item):
        pass

    # and operator makes life easier
    def __and__(self, other):
        return AndSpecification(self, other)



class ColorSpecification(Specification):
    def __init__(self, color):
        self.color = color

    def is_satisfied(self, item):
        return item.color == self.color

class SizeSpecification(Specification):
    def __init__(self, size):
        self.size = size

    def is_satisfied(self, item):
        return item.size == self.size

class PriceRangeSpecification(Specification):
    def __init__(self, minPrice, maxPrice):
        self.minPrice = minPrice
        self.maxPrice = maxPrice

    def is_satisfied(self, item):
        return self.minPrice <= item.price <= self.maxPrice


# class AndSpecification(Specification):
#     def __init__(self, spec1, spec2):
#         self.spec2 = spec2
#         self.spec1 = spec1
#
#     def is_satisfied(self, item):
#         return self.spec1.is_satisfied(item) and \
#                self.spec2.is_satisfied(item)

class AndSpecification(Specification):
    def __init__(self, *args):
        self.args = args

    def is_satisfied(self, item):
        return all(map(
            lambda spec: spec.is_satisfied(item), self.args))

class Filter:
    def filter(self, items, spec):
        pass

class BetterFilter(Filter):
    def filter(self, items, spec):
        for item in items:
            if spec.is_satisfied(item):
                yield item
                
                
                


print('--------Test Enum and Product-----------')
# Test our enum class
print('ENUMs:')    
print(Color.RED)
print(Size.MEDIUM) 
print('')

# Test our product class  
print('Product:')      
p1 = Product('Monkey', Color.RED, Size.MEDIUM, 100)
print(p1.__dict__)
print(p1)

# Create a list of product instances 
p2 = Product('Dog', Color.RED, Size.LARGE, 140)
p3 = Product('Cat', Color.BLUE, Size.SMALL, 885)
p4 = Product('Fish', Color.GREEN, Size.SMALL, 20)
p5 = Product('Dolphin', Color.BLUE, Size.LARGE, 660)
p6 = Product('Lynx', Color.BLUE, Size.MEDIUM, 1)
p7 = Product('Leopard', Color.RED, Size.LARGE, 999)
products = [p1, p2, p3, p4, p5, p6, p7]

print('\n==============Use Better Filter, complying with Open-Closed Principle (OCP) ==========')
betterFilter = BetterFilter()

print('--------Filter by Color: RED-----------')
print('RED products (OCP filter):')

red = ColorSpecification(Color.RED)
i = 1
for p in betterFilter.filter(products, red):
    print(str(i) + ') ' + str(p))
    i+=1


print('\n--------Filter by Size: LARGE-----------')
print('LARGE products (OCP filter):')    
large = SizeSpecification(Size.LARGE)
i = 1
for p in betterFilter.filter(products, large):
    print(str(i) + ') ' + str(p))
    i+=1
    
    
print('\n--------Filter by Color and Size: BLUE and MEDIUM-----------')
print('BLUE and MEDIUM products (OCP filter):')   
blue = ColorSpecification(Color.BLUE) 
medium = SizeSpecification(Size.MEDIUM)
blue_medium = AndSpecification(blue, medium)

i = 1
for p in betterFilter.filter(products, blue_medium):
    print(str(i) + ') ' + str(p))
    i+=1


print('\n--------Filter by Color and Size: RED and MEDIUM-----------')
print('RED and MEDIUM products (OCP filter):')   
red_medium =  red & medium

i = 1
for p in betterFilter.filter(products, red_medium):
    print(str(i) + ') ' + str(p))
    i+=1
    
    
print('\n--------Filter by Color and Size: RED and LARGE-----------')
print('RED and LARGE products (OCP filter):')   
i = 1
for p in betterFilter.filter(products, red & large):
    print(str(i) + ') ' + str(p))
    i+=1
    

print('\n--------Filter by Price Range 0-150 -----------')
print('Price Range 0-150 products (OCP filter):')  
range_0_150 = PriceRangeSpecification(0, 150)

i = 1
for p in betterFilter.filter(products, range_0_150):
    print(str(i) + ') ' + str(p))
    i+=1

print('\n--------Filter by Color and Size: RED and LARGE and Price Range 0-150 -----------')
print('RED and LARGE and Price Range 0-150 products (OCP filter):')
i = 1
for p in betterFilter.filter(products, red & large & range_0_150):
    print(str(i) + ') ' + str(p))
    i+=1


print('\n--------Filter by Price Range 100-890 -----------')
print('Price Range 100-850 products (OCP filter):')  
range_100_890 = PriceRangeSpecification(100, 890)

i = 1
for p in betterFilter.filter(products, range_100_890):
    print(str(i) + ') ' + str(p))
    i+=1