describe('SongQueueView', function() {
  var view, fakeSongs;

  beforeEach(function() {
    fakeSongs = new SongQueue([
      {
        artist: 'data',
        url: '/test/testsong.mp3',
        title: 'test song'
      },
      {
        artist: 'data',
        url: '/test/testsong2.mp3',
        title: 'test song 2'
      }
    ]);
  });

  it('creates SongQueueEntryViews for each queued song & renders them', function() {
    sinon.spy(SongQueueEntryView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.render();
    expect(SongQueueEntryView.prototype.render).to.have.been.called;
  });

  it('renders when add or remove event fires from the song queue collection', function() {
    sinon.spy(SongQueueView.prototype, 'render');
    view = new SongQueueView({collection: fakeSongs});
    view.collection.add({
      artist: 'data',
      url: '/test/testsong3.mp3',
      title: 'test song 3'
    });
    view.collection.pop();
    expect(view.render).to.have.been.called;
  });

  it('removes the song', function() {
    removeSpy = sinon.spy(SongQueue.prototype, 'remove');
    var songQueue = new SongQueue(fakeSongs);
    songQueue.at(0).dequeue();
    expect(removeSpy).to.have.been.called;
    SongQueue.prototype.remove.restore();
  });

  it('should have a length of zero after being rendered for the first time', function() {
    view = new SongQueueView({ collection: fakeSongs });
    expect(view.$el.children().length).to.equal(0);
  });
});
