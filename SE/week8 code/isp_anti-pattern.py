from abc import ABC, abstractmethod

class Machine(ABC):
    def print(self, document):
        raise NotImplementedError()

    def fax(self, document):
        raise NotImplementedError()

    def scan(self, document):
        raise NotImplementedError()


# ok if you need a multifunction device
class MultiFunctionPrinter(Machine):
    def print(self, document):
        print('printing')

    def fax(self, document):
        print('faxing')

    def scan(self, document):
        print('scanning')


class OldFashionedPrinter(Machine):
    def print(self, document):
        # ok - print stuff
        print('printing')
        pass

    def fax(self, document):
        print('do-nothing')
        pass  # do-nothing

    def scan(self, document):
        """Not supported!"""
        raise NotImplementedError('Printer cannot scan!') # Unnecessarily enforce a developer to implement this method. 


printer = MultiFunctionPrinter()
print('===== Use MultiFunctionPrinter =====')
printer.print(123) 
printer.fax(123)  
printer.scan(123)  
print('')

print('===== Use OldFashionedPrinter =====')
printer = OldFashionedPrinter()
printer.print(123)
printer.fax(123)
printer.scan(123)  # oops!
print('')

