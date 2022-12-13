import unicodedata

def strip_accents(s: str):
   return ''.join(c for c in unicodedata.normalize('NFD', s)
                  if unicodedata.category(c) != 'Mn')

def remove_special_characters(s: str):
    return ''.join(c for c in s if c.isalnum() or c == " ")
    