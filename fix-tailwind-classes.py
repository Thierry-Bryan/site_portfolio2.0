#!/usr/bin/env python3
"""
Script pour remplacer les classes CSS invalides par la syntaxe Tailwind correcte.
Remplace : text-(--bc) → text-[var(--bc)]
          bg-(--p) → bg-[var(--p)]
          etc.
"""

import re
import os
from pathlib import Path

# Pattern pour trouver toutes les classes avec variables CSS invalides
# Capture: (text|bg|border|shadow|etc)-(--variable-name)
PATTERN = r'(text|bg|border|shadow|from|to|via|ring|divide|placeholder|caret|accent|decoration|outline)-(--[\w-]+)'

def replace_invalid_class(match):
    """Remplace une classe invalide par la syntaxe Tailwind correcte."""
    prefix = match.group(1)  # text, bg, border, etc.
    var_name = match.group(2)  # --bc, --p, etc.
    
    return f'{prefix}-[var({var_name})]'

def fix_file(file_path):
    """Corrige toutes les classes invalides dans un fichier."""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Compter les replacements
        original_content = content
        content = re.sub(PATTERN, replace_invalid_class, content)
        
        # Écrire seulement si changé
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Compter les changements
            count = len(re.findall(PATTERN, original_content))
            print(f"✅ {file_path}: {count} classes corrigées")
            return count
        else:
            return 0
            
    except Exception as e:
        print(f"❌ Erreur avec {file_path}: {e}")
        return 0

def main():
    """Parcourt récursivement tous les fichiers Astro et CSS."""
    base_path = Path('src')
    total = 0
    
    # Extensions à traiter
    extensions = ['.astro', '.css', '.html', '.jsx', '.tsx']
    
    print("🔍 Recherche des fichiers à corriger...")
    
    for ext in extensions:
        for file_path in base_path.rglob(f'*{ext}'):
            count = fix_file(file_path)
            total += count
    
    print(f"\n✨ Total : {total} classes corrigées")

if __name__ == '__main__':
    main()
