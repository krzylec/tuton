-- Create table for Video
CREATE TABLE Video
(
    id           UUID PRIMARY KEY,
    title        VARCHAR(255),
    location     VARCHAR(255),
    creation_date DATE,
    thumbnail    BYTEA
);

-- Create table for Lesson
CREATE TABLE Lesson
(
    id           SERIAL PRIMARY KEY,
    description  VARCHAR(255),
    creation_date TIMESTAMP,
    video_id     UUID REFERENCES Video (id)
);

-- Create table for Flashcard
CREATE TABLE Flashcard
(
    id               SERIAL PRIMARY KEY,
    front_text        TEXT,
    back_text         TEXT,
    creation_date     TIMESTAMP,
    modification_date TIMESTAMP,
    lesson_id        INTEGER REFERENCES Lesson (id)
);

-- Insert sample data
INSERT INTO Lesson (description, creation_date)
VALUES ('Sample description 1', '2024-03-17T10:00:00'),
       ('Sample description 2', '2024-03-17T11:00:00'),
       ('Sample description 3', '2024-03-17T12:00:00'),
       ('Sample description 4', '2024-03-17T13:00:00'),
       ('Sample description 5', '2024-03-17T14:00:00'),
       ('Sample description 6', '2024-03-17T15:00:00'),
       ('Sample description 7', '2024-03-17T16:00:00'),
       ('Sample description 8', '2024-03-17T17:00:00'),
       ('Sample description 9', '2024-03-17T18:00:00'),
       ('Sample description 10', '2024-03-17T19:00:00');

INSERT INTO Flashcard (front_text, back_text, creation_date, modification_date, lesson_id)
VALUES
    -- Flashcards for Lesson 1
    ('Front Text 1.1', 'Back Text 1.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ('Front Text 1.2', 'Back Text 1.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ('Front Text 1.3', 'Back Text 1.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ('Front Text 1.4', 'Back Text 1.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),
    ('Front Text 1.5', 'Back Text 1.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 1),

    -- Flashcards for Lesson 2
    ('Front Text 2.1', 'Back Text 2.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
    ('Front Text 2.2', 'Back Text 2.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
    ('Front Text 2.3', 'Back Text 2.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
    ('Front Text 2.4', 'Back Text 2.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),
    ('Front Text 2.5', 'Back Text 2.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 2),

    -- Flashcards for Lesson 3
    ('Front Text 3.1', 'Back Text 3.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
    ('Front Text 3.2', 'Back Text 3.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
    ('Front Text 3.3', 'Back Text 3.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
    ('Front Text 3.4', 'Back Text 3.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),
    ('Front Text 3.5', 'Back Text 3.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 3),

    -- Flashcards for Lesson 4
    ('Front Text 4.1', 'Back Text 4.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4),
    ('Front Text 4.2', 'Back Text 4.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4),
    ('Front Text 4.3', 'Back Text 4.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4),
    ('Front Text 4.4', 'Back Text 4.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4),
    ('Front Text 4.5', 'Back Text 4.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 4),

    -- Flashcards for Lesson 5
    ('Front Text 5.1', 'Back Text 5.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),
    ('Front Text 5.2', 'Back Text 5.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),
    ('Front Text 5.3', 'Back Text 5.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),
    ('Front Text 5.4', 'Back Text 5.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),
    ('Front Text 5.5', 'Back Text 5.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 5),

    -- Flashcards for Lesson 6
    ('Front Text 6.1', 'Back Text 6.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),
    ('Front Text 6.2', 'Back Text 6.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),
    ('Front Text 6.3', 'Back Text 6.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),
    ('Front Text 6.4', 'Back Text 6.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),
    ('Front Text 6.5', 'Back Text 6.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 6),

    -- Flashcards for Lesson 7
    ('Front Text 7.1', 'Back Text 7.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7),
    ('Front Text 7.2', 'Back Text 7.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7),
    ('Front Text 7.3', 'Back Text 7.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7),
    ('Front Text 7.4', 'Back Text 7.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7),
    ('Front Text 7.5', 'Back Text 7.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 7),

    -- Flashcards for Lesson 8
    ('Front Text 8.1', 'Back Text 8.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8),
    ('Front Text 8.2', 'Back Text 8.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8),
    ('Front Text 8.3', 'Back Text 8.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8),
    ('Front Text 8.4', 'Back Text 8.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8),
    ('Front Text 8.5', 'Back Text 8.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 8),

    -- Flashcards for Lesson 9
    ('Front Text 9.1', 'Back Text 9.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 9),
    ('Front Text 9.2', 'Back Text 9.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 9),
    ('Front Text 9.3', 'Back Text 9.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 9),
    ('Front Text 9.4', 'Back Text 9.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 9),
    ('Front Text 9.5', 'Back Text 9.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 9),

    -- Flashcards for Lesson 10
    ('Front Text 10.1', 'Back Text 10.1', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10),
    ('Front Text 10.2', 'Back Text 10.2', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10),
    ('Front Text 10.3', 'Back Text 10.3', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10),
    ('Front Text 10.4', 'Back Text 10.4', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10),
    ('Front Text 10.5', 'Back Text 10.5', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, 10);