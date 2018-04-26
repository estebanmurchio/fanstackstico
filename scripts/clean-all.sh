#!/bin/bash
echo ""
echo "    fanstackstico  Copyright (C) 2018  Esteban Murchio"
echo "    This program comes with ABSOLUTELY NO WARRANTY."
echo "    This is free software, and you are welcome to redistribute it"
echo "    under certain conditions."
echo ""
echo "Cleaning 'node_modules/'..."
rm -rf node_modules
echo "Installing and building..."
npm install && npm run build
echo "Done."
