(() => {
    const trackedImages = new WeakSet();

    function trackImage(image) {
        if (trackedImages.has(image)) {
            return;
        }

        trackedImages.add(image);
        image.addEventListener('load', () => {
            image.dataset.imageState = 'loaded';
        });
        image.addEventListener('error', () => {
            image.dataset.imageState = 'error';
        });

        if (image.complete) {
            image.dataset.imageState = image.naturalWidth > 0 ? 'loaded' : 'error';
        }
    }

    function trackNode(node) {
        if (node instanceof HTMLImageElement) {
            trackImage(node);
        } else if (node.querySelectorAll) {
            node.querySelectorAll('img').forEach(trackImage);
        }
    }

    document.querySelectorAll('img').forEach(trackImage);

    new MutationObserver(records => {
        records.forEach(record => {
            if (record.type === 'attributes') {
                record.target.removeAttribute('data-image-state');
            } else {
                record.addedNodes.forEach(trackNode);
            }
        });
    }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['src', 'srcset'],
        childList: true,
        subtree: true
    });
})();
