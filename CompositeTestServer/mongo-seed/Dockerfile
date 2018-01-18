FROM mongo

COPY init.json /init.json
CMD mongoimport --host composite-test-db --db ComposeTest --collection Device --type json --file /init.json
