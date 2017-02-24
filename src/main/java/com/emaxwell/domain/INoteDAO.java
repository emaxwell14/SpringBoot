package com.emaxwell.domain;

import java.util.List;

/**
 * Created by User on 15/02/2017.
 */
public interface INoteDAO {
    List<Note> getAll();

    Note getNoteById(int id);

    Note save(Note note);
}
